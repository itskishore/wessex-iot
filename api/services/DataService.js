/*DataService
*
*/

var request = require('request');
var base = process.env.BASE_API_URL || 'http://localhost:1338/';

exports.invoke = function (options, cb) {
    var http = options.http;
    var req_options = {
        url: base + options.url,
        method: options.method,
	};
    if(options.method == 'GET' || options.method == 'POST'){
    	req_options.body = JSON.stringify(options.body);
    }

	var callback = function(error, response, body) {
        if(error){
            cb(null, null);
            // http.res.serverError('API seems to be having an issue');
        }else if (response.statusCode == 200) {
            cb(null, JSON.parse(body));
        }else if (response.statusCode == 403) {
            cb(JSON.parse({status: 403, body: response.body}));
        }else if (response.statusCode == 422) {
            cb(null, JSON.parse(body));
            // cb(JSON.parse({status: 422, body: response.body}));
        }else if (response.statusCode == 404){
            http.res.notFound();
        }else if (response.statusCode == 500) {
            sails.log('response.body',response.body);
            cb({status: 500, body: response.body});
            // cb(JSON.parse({status: 500, body: response.body}));
            // cb(JSON.parse(response.body));
        }else if (response.statusCode == 413){
            cb(JSON.parse(response.body));
        }
        else if (response.statusCode == 415){
            cb(JSON.parse(response.body));
        }else{
            // cb(JSON.parse(response.body));
            http.res.serverError(response.body);
        }

    };

    // Set up the request
    var req = request(req_options, callback);

}
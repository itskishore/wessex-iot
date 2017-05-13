/**
 * DigesterOneCH4Gas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var xls = require('excel');
var fs = require('fs');
var xlsx = require('node-xlsx');
var moment = require('moment');
var lineCount = 1;

module.exports = {
	digesterOneCH4Gas: function (cb) {
 		var array = xlsx.parse(fs.readFileSync('Food Waste Plant Data.xlsx'));
    	var data = array[5]['data'];
		// sails.log.debug("data---", data);
		var loopBack = function(){
			var dateFormat = function getJsDateFromExcel(excelDate) {
				var date = new Date((excelDate - (25567 + 2)) * 86400 * 1000);
				var localTime = new Date(date.getTime() + (new Date()).getTimezoneOffset() * 60000);
				return moment(localTime).format("DD-MM-YYYY HH:mm");
			}
      		var json = {time: dateFormat(data[lineCount][3]), value: data[lineCount][4]};
			lineCount++;
			if(lineCount >= data.length)
				lineCount = 1;

			sails.log.debug("json--", json);
			var req = {url: 'simulator/digesteroneCH4gas', body: json, method: 'POST'};
		    DataService.invoke(req, function (err, result){
		    	if(err)
		    		sails.log.error("err", err);
		    });	
		};
		setInterval(loopBack, 3000);
		cb(null, 'ok');
			  
	}

};


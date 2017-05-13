/**
 * DigesterOneCH4GasController
 *
 * @description :: Server-side logic for managing Digesteronech4gases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	pasteuriserHeatDemandData: function (req, res) {
		sails.log("Hitting the api");
		DigesterOneCH4Gas.digesterOneCH4Gas(function(err, result){
			if(err)
				return res.json(err);

			res.json(result);
		});
	},
	
};



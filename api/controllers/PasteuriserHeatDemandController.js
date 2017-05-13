/**
 * PasteuriserHeatDemandController
 *
 * @description :: Server-side logic for managing Pasteuriserheatdemands
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	pasteuriserHeatDemandData: function (req, res) {
		sails.log("Hitting the api");
		PasteuriserHeatDemand.pasteuriserHeatDemand(function(err, result){
			if(err)
				return res.json(err);

			res.json(result);
		});
	},
	
};


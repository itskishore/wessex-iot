/**
 * PasteuriserFeedFlowController
 *
 * @description :: Server-side logic for managing Pasteuriserfeedflows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	pasteuriserFeedFlowData: function (req, res) {
		sails.log("Hitting the api");
		PasteuriserFeedFlow.pasteuriserFeedFlow(function(err, result){
			if(err)
				return res.json(err);

			res.json(result);
		});
	},
	
};


/**
 * BufferTankOutletDrySolidsController
 *
 * @description :: Server-side logic for managing Buffertankoutletdrysolids
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	bufferTankOutletDrySolidsData: function (req, res) {
		sails.log("Hitting the api");
		BufferTankOutletDrySolids.bufferTankOutletDrySolids(function(err, result){
			if(err)
				return res.json(err);

			res.json(result);
		});
	},
	
};


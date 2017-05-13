/**
 * BufferTankFeedFlowController
 *
 * @description :: Server-side logic for managing fileuploads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
	bufferTankFeedFlowData: function (req, res) {
		sails.log("Hitting the api");
		BufferTankFeedFlow.readBufferTankFeedFlow(function(err, result){
			if(err)
				return res.json(err);

			res.json(result);
		});
	},
	
};


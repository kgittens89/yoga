const mongoose = require('../db/connection');

const SequenceSchema = new mongoose.Schema({
	name: String,
	sequence: [
		{
			id: Number,
			poseTitle: String
		},
	]
});

const Sequence = mongoose.model('Sequence', SequenceSchema);

module.exports = Sequence;

const mongoose = require('../db/connection');

const SequenceSchema = new mongoose.Schema({
	id: Number,
	sequenceName: String,
	sequencePoses: [
		{
			id: Number,
			englishName: String,
			sanskritName: String,
			image: String,
			description: String,
		},
	],
});

const Sequence = mongoose.model('Sequence', SequenceSchema);

module.exports = Sequence;

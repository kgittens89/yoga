const mongoose = require('../db/connection');

const SequenceSchema = new mongoose.Schema({
	id: Number,
	sequenceName: String,
	sequencePoses: [
		{
			id: Number,
			englishName: String,
			image: String,
		},
	],
});

const Sequence = mongoose.model('Sequence', SequenceSchema);

module.exports = Sequence;

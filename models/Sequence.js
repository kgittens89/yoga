const mongoose = require('../db/connection');

const SequenceSchema = new mongoose.Schema({
	id: Number,
	english_name: String,
	sanskrit_name: String,
	image: URL,
	description: String,
	difficulty: String,
	catagories: [
		{
			cat_name: String,
			cat_description: String,
			cat_id: Number,
		},
	],
});

const Sequence = mongoose.model('Sequence', SequenceSchema);

module.exports = Sequence;

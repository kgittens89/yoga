const Asana = require('../models/Asana');
const Sequence = require('../models/Sequence');

const asanaSeeds = require('./seeds.json');
const sequenceSeeds = require('./sequence.json');

Asana.deleteMany({})
	.then(() => {
		console.log('Deleted all asanas!');
		return Asana.insertMany(asanaSeeds);
	})
	.catch(console.error);

Sequence.deleteMany({})
	.then(() => {
    console.log('Deleted all sequences!');
    return Sequence.insertMany(sequenceSeeds);
	})
	.catch(console.error);

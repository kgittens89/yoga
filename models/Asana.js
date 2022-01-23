const mongoose = require('../db/connection');


const AsanaSchema = new mongoose.Schema({
    id: Number,
    englishName: String,
    sanskritName: String,
    image: URL,
    description: String,
    difficulty: String,
    categories: [
        {
            catName: String,
            catDescription: String,
            catId: Number
        }
    ]
});

const Asana = mongoose.model('Asana', AsanaSchema);

module.exports = Asana;
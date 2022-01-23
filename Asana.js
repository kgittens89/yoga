const mongoose = require('../db/connection');


const AsanaSchema = new mongoose.Schema({
    "id": Number,
    "english_name": String,
    "sanskrit_name": String,
    "image": URL,
    "description": String,
    "difficulty": String,
    "catagories": [
        {
            "cat_name": String,
            "cat_description": String,
            "cat_id": Number
        }
    ] 
})

const Asana = mongoose.model('Asana', AsanaSchema);

module.exports = Asana;
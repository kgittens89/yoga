const express = require('express');
const Sequence = require('../models/Sequence');


const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const sequences = await Sequence.find({});
        res.json(sequences);
    } catch (error) {
        next(error)
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const sequence = await Sequence.findByIdAndUpdate(
             req.params.id ,
            req.body,
            { new: true }
        )

            res.json(sequence)


    } catch (error) {
        next(error)
    }
});

module.exports = router;
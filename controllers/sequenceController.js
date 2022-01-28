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

router.post('/', async (req, res, next) => {
    try {
        const newSequence = await Sequence.create(req.body)
        res.json(newSequence)  
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
        console.log(sequence)
            res.json(sequence)
    } catch (error) {
        next(error)
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedSequence = await Sequence.findByIdAndDelete(req.params.id);
        res.json(deletedSequence)
    } catch (error) {
        next(error)
    }
});


router.put('/pose/:sequenceId/:poseId', async (req, res, next) => {
	try {
        // const deletedPose = await Sequence.findByIdAndDelete(req.params.id);
        // console.log(req.params.id)
        // console.log(deletedPose)
        // res.json(deletedPose)
        const findSequence = await Sequence.findById(req.params.sequenceId)
        // console.log(findSequence)
        const newSequencePoses = findSequence.sequencePoses.filter((pose) => {
            // console.log(pose._id.toString())
            return pose._id.toString() !== req.params.poseId
        })
        findSequence.sequencePoses = [...newSequencePoses]
        console.log(findSequence)
        // console.log(newSequencePoses)
        const newFindSequence = await Sequence.findByIdAndUpdate(req.params.sequenceId, findSequence)
        res.json(findSequence)

    } catch (error) {
        next(error)
    }
});

module.exports = router;
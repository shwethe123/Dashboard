const mongoose = require('mongoose');
const LocaOneScore = require('../../Model/GoutScore_schema/Loca1Schema');

const Loca1Controller = {
    index: async (req, res) => {
        try {
            const loca1_scores = await LocaOneScore.find().sort({ createdAt: -1 });
            return res.json(loca1_scores);
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    },

    store: async (req, res) => {
        try {
            const { ag, row, loca, score } = req.body;

            if (!ag || !row || !loca || !score) {
                return res.status(400).json({ msg: 'All fields are required' });
            }

            const newLocaOneScore = await LocaOneScore.create({
                ag,
                row,
                loca,
                score
            });

            return res.status(201).json(newLocaOneScore);
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    },

    show: async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg: 'Invalid ID format' });
            }

            const loca1Show = await LocaOneScore.findById(id);
            if (!loca1Show) {
                return res.status(404).json({ msg: 'Post not found' });
            }

            return res.json(loca1Show);
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg: 'Invalid ID format' });
            }

            const updatedLoca1Score = await LocaOneScore.findByIdAndUpdate(id, { ...req.body }, { new: true });
            if (!updatedLoca1Score) {
                return res.status(404).json({ msg: 'Post not found' });
            }

            return res.json(updatedLoca1Score);
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    },

    destory: async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg: 'Invalid ID format' });
            }

            const deletedLoca1Score = await LocaOneScore.findByIdAndDelete(id);
            if (!deletedLoca1Score) {
                return res.status(404).json({ msg: 'Post not found' });
            }

            return res.json(deletedLoca1Score);
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    }
};

module.exports = Loca1Controller;

const mongoose = require('mongoose');
const GoutScore_schema = require("../../Model/GoutScore_schema/GoutScoreSchema.js");

const GoutScore_controller = {
    index: async (req, res) => {
        try {
            const scoreAll = await GoutScore_schema.find().sort({ updatedAt: -1 });
            return res.json(scoreAll);
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    },

    store: async (req, res) => {
        try {
            const { ag, name, location, score } = req.body;

            if (!ag || !name || !location || !score) {
                return res.status(400).json({ msg: 'All fields are required' });
            }

            const newScore = await GoutScore_schema.create({
                ag,
                name,
                location,
                score
            });

            return res.status(201).json(newScore);
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
            const showScore = await GoutScore_schema.findById(id);
            if (!showScore) {
                return res.status(404).json({ msg: 'Post not found' });
            }

            return res.json(showScore);
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

            const updatedScore = await GoutScore_schema.findByIdAndUpdate(id, { ...req.body }, { new: true });
            return res.json(updatedScore);
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    },

    destroy: async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg: 'Invalid ID format' });
            }

            await GoutScore_schema.findByIdAndDelete(id);
            return res.json({ msg: 'Post deleted successfully' });
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    }
};

module.exports = GoutScore_controller;
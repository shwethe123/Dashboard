const mongoose = require('mongoose');
const Loca2Schema = require('../../Model/GoutScore_schema/Loca2Schema');

const loca2Score = {
    index : async (req, res) =>{
        try {
            const loca2_score = await Loca2Schema.find().sort({ createAd : -1});
            return res.status(201).json(loca2_score);
        } catch (error) {
            return res.status(500).json({ msg : 'error', error:error.message });
        }
    },

    store : async (req, res) => {
        try {
            const {ag, row, loca, score} = req.body;
            if (!ag || !row || !loca || !score) {
                return res.status(400).json({msg: 'All fields are required'});
            };
            const loca2_score = await Loca2Schema.create({
                ag,
                row,
                loca,
                score
            });
            return res.status(201).json(loca2_score);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message });
        }
    },

    show : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({msg: 'Invalid ID format'});
            };
            const loca2_show = await Loca2Schema.findById(id);
            if (!loca2_show) {
                return res.status(404).json({ msg : 'Post Not Found'});
            };
            return res.status(201).json(loca2_show);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.messate});
        }
    },

    update : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({msg : 'Invalid id format'});
            };
            const loca2_update = await Loca2Schema.findByIdAndUpdate(id, {...req.body});
            if (!loca2_update) {
                return res.status(404).json({ msg : 'Not found post'});
            };
            return res.status(200).json(loca2_update);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    },

    destory: async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg: 'Invalid ID format' });
            }

            const loca2_delete = await Loca2Schema.findByIdAndDelete(id);
            if (!loca2_delete) {
                return res.status(404).json({ msg: 'Post not found' });
            }

            return res.json(loca2_delete);
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    }
}

module.exports = loca2Score
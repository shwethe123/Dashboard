const mongoose = require('mongoose');
const Loca3Schema = require('../../Model/GoutScore_schema/Loca3Schema');

const loca2Score = {
    index : async (req, res) =>{
        try {
            const loca3_score = await Loca3Schema.find().sort({ createAd : -1});
            return res.status(201).json(loca3_score);
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
            const loca3_score = await Loca3Schema.create({
                ag,
                row,
                loca,
                score
            });
            return res.status(201).json(loca3_score);
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
            const loca3_show = await Loca3Schema.findById(id);
            if (!loca3_show) {
                return res.status(404).json({ msg : 'Post Not Found'});
            };
            return res.status(201).json(loca3_show);
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
            const loca3_update = await Loca3Schema.findByIdAndUpdate(id, {...req.body});
            if (!loca3_update) {
                return res.status(404).json({ msg : 'Not found post'});
            };
            return res.status(200).json(loca3_update);
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

            const loca3_delete = await Loca3Schema.findByIdAndDelete(id);
            if (!loca3_delete) {
                return res.status(404).json({ msg: 'Post not found' });
            }

            return res.json(loca3_delete);
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    }
}

module.exports = loca2Score
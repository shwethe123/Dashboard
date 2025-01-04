const mongoose = require('mongoose');
const saileIn_three_schema = require('../../Model/locaThree_schema/SalesIn_three');

const salesIn_three_controller = {
    index : async (req, res) => {
        try {
            const salelIn_three_recipes = await saileIn_three_schema.find().sort({ createdAt : -1});
            return res.json(salelIn_three_recipes);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        };
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reason} = req.body;
            const salelIn_three_post = await saileIn_three_schema.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            });
            return res.json(salelIn_three_post);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    },

    show : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Is invalid id'});
            };
            const selelIn_three_show = await saileIn_three_schema.findById(id);
            if (!selelIn_three_show) {
                return res.status(404).json({ msg : 'Not Found Id'});
            };
            return res.json(selelIn_three_show);
        } catch (error) {
            return res.status(500).json({msg: 'error', error:error.message});
        }
    },

    updated : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Is invalid id'});
            };
            const selelIn_three_update = await saileIn_three_schema.findByIdAndUpdate(id, {...req.body});
            if (!selelIn_three_update) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(selelIn_three_update);
        } catch (error) {
            return res.status(500).json({ msg : 'error', error:error.message});
        }
    },

    destory : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Is invalid Id'});
            };
            const salesIn_three_delete = await saileIn_three_schema.findByIdAndDelete(id);
            if (!salesIn_three_delete) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(salesIn_three_delete);
        } catch (error) {
            return res.status(500).json({ msg : 'error', error:error.message});
        }
    }
}

module.exports = salesIn_three_controller;
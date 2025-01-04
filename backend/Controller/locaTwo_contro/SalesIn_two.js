const mongoose = require('mongoose');
const saileIn_schema = require('../../Model/locaTwo_schema/SalesIn_two');

const salesIn_two_controller = {
    index : async (req, res) => {
        try {
            const salelIn_two_recipes = await saileIn_schema.find().sort({ createdAt : -1});
            return res.json(salelIn_two_recipes);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        };
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reason } = req.body;
            const salelIn_two_post = await saileIn_schema.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            });
            return res.json(salelIn_two_post);
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
            const selelIn_two_show = await saileIn_schema.findById(id);
            if (!selelIn_two_show) {
                return res.status(404).json({ msg : 'Not Found Id'});
            };
            return res.json(selelIn_two_show);
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
            const selelIn_two_update = await saileIn_schema.findByIdAndUpdate(id, {...req.body});
            if (!selelIn_two_update) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(selelIn_two_update);
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
            const salesIn_two_delete = await saileIn_schema.findByIdAndDelete(id);
            if (!salesIn_two_delete) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(salesIn_two_delete);
        } catch (error) {
            return res.status(500).json({ msg : 'error', error:error.message});
        }
    }
}

module.exports = salesIn_two_controller;
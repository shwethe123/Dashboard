const mongoose = require('mongoose');
const salelsOut_two_schema = require('../../Model/locaTwo_schema/SalesOut_two');

const salesOut_two_controller = {
    index : async (req, res) => {
        try {
            const salelsOut_recipes = await salelsOut_two_schema.find().sort({ createdAt : -1});
            return res.json(salelsOut_recipes);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        };
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reason} = req.body;
            const salelOut_two_post = await salelsOut_two_schema.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            });
            return res.json(salelOut_two_post);
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
            const selelOut_two_show = await salelsOut_two_schema.findById(id);
            if (!selelOut_two_show) {
                return res.status(404).json({ msg : 'Not Found Id'});
            };
            return res.json(selelOut_two_show);
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
            const selelOut_two_update = await salelsOut_two_schema.findByIdAndUpdate(id, {...req.body});
            if (!selelOut_two_update) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(selelOut_two_update);
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
            const salesOut_two_delete = await salelsOut_two_schema.findByIdAndDelete(id);
            if (!salesOut_two_delete) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(salesOut_two_delete);
        } catch (error) {
            return res.status(500).json({ msg : 'error', error:error.message});
        }
    }
}

module.exports = salesOut_two_controller;
const mongoose = require('mongoose');
const salelsOut_three_schema = require('../../Model/locaThree_schema/SalesOut_three');

const salesOut_three_controller = {
    index : async (req, res) => {
        try {
            const salelsOut_recipes = await salelsOut_three_schema.find().sort({ createdAt : -1});
            return res.json(salelsOut_recipes);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        };
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reason} = req.body;
            const salelOut_three_post = await salelsOut_three_schema.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            });
            return res.json(salelOut_three_post);
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
            const selelOut_three_show = await salelsOut_three_schema.findById(id);
            if (!selelOut_three_show) {
                return res.status(404).json({ msg : 'Not Found Id'});
            };
            return res.json(selelOut_three_show);
        } catch (error) {
            return res.status(500).json({msg: 'error', error:error.message});
        }
    },

    update : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Is invalid id'});
            };
            const selelOut_three_update = await salelsOut_three_schema.findByIdAndUpdate(id, {...req.body});
            if (!selelOut_three_update) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(selelOut_three_update);
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
            const salesOut_three_delete = await salelsOut_three_schema.findByIdAndDelete(id);
            if (!salesOut_three_delete) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(salesOut_three_delete);
        } catch (error) {
            return res.status(500).json({ msg : 'error', error:error.message});
        }
    }
}

module.exports = salesOut_three_controller;
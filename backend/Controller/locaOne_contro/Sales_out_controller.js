const mongoose = require('mongoose');
const Sales_out = require("../../Model/locaOne_schema/Sales_out");

const Sales_out_controller = {
    index : async (req, res) => {
        const sale_out = await Sales_out.find().sort({ createdAt : -1});
        return res.json(sale_out);
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reason } = req.body;
            const sale_out = await Sales_out.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            })
            return res.json(sale_out);
        } catch (error) {
            return res.status(500).json({ error : 'Error', error:error.message});
        }
    },

    show : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a Invalid'});
            };
            const sale_out = await Sales_out.findById(id);
            if (!sale_out) {
                return res.status(494).json({ msg : 'Not found sale_out'});
            };
            return res.json(sale_out);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    },

    destory : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a Invalid'});
            };
            const sale_out = await Sales_out.findByIdAndDelete(id);
            if (!sale_out) {
                return res.status(404).json({ msg : 'sale_out id Not Found'});
            };
            return res.json(sale_out);
        } catch (error) {
            return res.status(500).json({ msg : 'Server Error', error:error.message});
        }
    },

    update : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({ msg : 'Not a Valid'});
            };
            const sale_out = await Sales_out.findByIdAndUpdate(id, {...req.body});
            if (!sale_out) {
                return res.status(404).json({ msg : 'Not found sale_out Update'});
            };
            return res.json(sale_out);
        } catch (error) {
            return res.status(500).json({ msg : 'Server Error', error:error.message});
        }
    }
};

module.exports = Sales_out_controller;
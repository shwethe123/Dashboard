const Accounting_schema = require("../../Model/locaOne_schema/Accounting");
const mongoose = require('mongoose');

const Accounting_controller = {
    index : async (req, res) => {
        const accounting = await Accounting_schema.find().sort({ createdAt : -1});
        return res.json(accounting);
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reason } = req.body;
            const accounting = await Accounting_schema.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            })
            return res.json(accounting);
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
            const accounting = await Accounting_schema.findById(id);
            if (!accounting) {
                return res.status(494).json({ msg : 'Not found Accounting_schema'});
            };
            return res.json(accounting);
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
            const accounting = await Accounting_schema.findByIdAndDelete(id);
            if (!accounting) {
                return res.status(404).json({ msg : 'Accounting_schema id Not Found'});
            };
            return res.json(accounting);
        } catch (error) {
            return res.status(500).json({ msg : 'Server Error', error:error.message});
        }
    },

    update : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({msg : 'Not a Invalid id'})
            };
            const accounting = await Accounting_schema.findByIdAndUpdate(id,{...req.body});
            if (!accounting) {
                return res.status(404).json({ msg : 'Not found accounting post'});
            };
            return res.json(accounting);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error : error.message});
        }
    }
};

module.exports = Accounting_controller;
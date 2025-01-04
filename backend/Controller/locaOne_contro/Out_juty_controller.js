const Out_juty = require('../../Model/locaOne_schema/Out_juty');
const mongoose = require('mongoose');

const out_juty_controller = {
    index : async (req, res) => {
        const out_juty = await Out_juty.find().sort({ createAt : -1});
        return res.json(out_juty)
    },

    store : async (req, res) => {
        try {
            const {Id, Ag, Name, Phone, condition, selection, reason } = req.body;
            const out_juty = await Out_juty.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            });
            return res.json(out_juty);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error : error.message});
        }
    },

    show : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a Invalid'});
            };
            const out_juty = await Out_juty.findById(id);
            if (!out_juty) {
                return res.status(494).json({ msg : 'Not found out_juty'});
            };
            return res.json(out_juty);
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
            const out_juty = await Out_juty.findByIdAndDelete(id);
            if (!out_juty) {
                return res.status(404).json({ msg : 'out_juty id Not Found'});
            };
            return res.json(out_juty);
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
            const out_juty = await Out_juty.findByIdAndUpdate(id, {...req.body});
            if (!out_juty) {
                return res.status(404).json({ msg : 'Not found out_juty Update'});
            };
            return res.json(out_juty);
        } catch (error) {
            return res.status(500).json({ msg : 'Server Error', error:error.message});
        }
    }
}

module.exports = out_juty_controller;
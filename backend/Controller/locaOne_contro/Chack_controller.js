const chack_schema = require('../../Model/locaOne_schema/Chack');
const mongoose = require('mongoose');

const chack_controller = {
    index : async (req, res) => {
        const chack = await chack_schema.find().sort({ createAt : -1});
        return res.json(chack)
    },

    store : async (req, res) => {
        try {
            const {Id, Ag, Name, Phone, condition, selection, reason } = req.body;
            const chack = await chack_schema.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            });
            return res.json(chack);
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
            const order_in = await chack_schema.findById(id);
            if (!order_in) {
                return res.status(494).json({ msg : 'Not found chack_schema'});
            };
            return res.json(order_in);
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
            const chack_delet = await chack_schema.findByIdAndDelete(id);
            if (!chack_delet) {
                return res.status(404).json({ msg : 'chack_schema id Not Found'});
            };
            return res.json(chack_delet);
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
            const chack_updated = await chack_schema.findByIdAndUpdate(id, {...req.body});
            if (!chack_updated) {
                return res.status(404).json({ msg : 'Not found chack_schema Update'});
            };
            return res.json(chack_updated);
        } catch (error) {
            return res.status(500).json({ msg : 'Server  Error', error:error.message});
        }
    }
}

module.exports = chack_controller;
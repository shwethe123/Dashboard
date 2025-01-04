
const Sales_in = require('../../Model/locaOne_schema/Sales_in')
const mongoose = require('mongoose');

const Sales_in_controller = {
    index : async (req, res) => {
        const g_outPost = await Sales_in.find().sort({ createdAt : -1});
        return res.json(g_outPost);
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, selection, condition, reason } = req.body;
            const UserPost = await Sales_in.create({
                Id,
                Ag,
                Name,
                Phone,
                selection,
                condition, 
                reason
                
            })
            return res.json(UserPost);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    },

    show : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a Invalid'});
            };
            const sale_in = await Sales_in.findById(id);
            if (!sale_in) {
                return res.status(404).json({ msg : 'Not found sale_in'});
            };
            return res.json(sale_in);
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
            const sale_in = await Sales_in.findByIdAndDelete(id);
            if (!sale_in) {
                return res.status(404).json({ msg : 'sale_in id Not Found'});
            };
            return res.json(sale_in);
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
            const sale_in = await Sales_in.findByIdAndUpdate(id, {...req.body});
            if (!sale_in) {
                return res.status(404).json({ msg : 'Not found sale_in Update'});
            };
            return res.json(sale_in);
        } catch (error) {
            return res.status(500).json({ msg : 'Server Error', error:error.message});
        }
    }
}

module.exports = Sales_in_controller;
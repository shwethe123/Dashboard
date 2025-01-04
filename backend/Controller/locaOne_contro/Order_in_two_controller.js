const Order_in_two_schema = require("../../Model/locaOne_schema/Order_in_two");
const mongoose = require('mongoose');

const Order_in_two_controller_controller = {
    index : async (req, res) => {
        const g_outPost = await Order_in_two_schema.find().sort({ createdAt : -1});
        return res.json(g_outPost);
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reason } = req.body;
            const UserPost = await Order_in_two_schema.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
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
            const order_in = await Order_in_two_schema.findById(id);
            if (!order_in) {
                return res.status(404).json({ msg : 'Not found Order_in_two_schema'});
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
            const order_in = await Order_in_two_schema.findByIdAndDelete(id);
            if (!order_in) {
                return res.status(404).json({ msg : 'Order_in_two_schema id Not Found'});
            };
            return res.json(order_in);
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
            const order_in = await Order_in_two_schema.findByIdAndUpdate(id, {...req.body});
            if (!order_in) {
                return res.status(404).json({ msg : 'Not found Order_in_two_schema Update'});
            };
            return res.json(order_in);
        } catch (error) {
            return res.status(500).json({ msg : 'Server Error', error:error.message});
        }
    }
}

module.exports = Order_in_two_controller_controller;
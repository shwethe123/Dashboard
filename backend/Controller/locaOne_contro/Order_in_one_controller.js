const Order_in_schema = require('../../Model/locaOne_schema/Order_in');
const mongoose = require('mongoose');

const Order_in_controller = {
    index : async (req, res) => {
        try {
            const order_in = await Order_in_schema.find().sort({ createdAt : -1});
            return res.json(order_in);
        } catch (error) {
            return res.status(500).json({msg : 'Error', error:error.message});
        }
    },
    store : async (req, res) => {
        try {
            const {Id, Ag, Name, Phone, condition, selection, reason } = req.body;
            const UserPost = await Order_in_schema.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            });
            return res.json(UserPost);
        } catch (error) {
            return res.status(500).json({msg: 'Error', error:error.message});
        }
    },

    show : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a Invalid'});
            };
            const order_in = await Order_in_schema.findById(id);
            if (!order_in) {
                return res.status(404).json({ msg : 'Not found post Id'});
            };
            return res.json(order_in);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    },

    update : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a Invalid Id'});
            };
            const Order_update = await Order_in_schema.findByIdAndUpdate(id, {...req.body});
            if (!Order_update) {
                return res.status(404).json({ msg : 'Not found Post Id'});
            };
            return res.json(Order_update);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    },

    destory : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a Invalid Id'});
            };
            const Order_delete = await Order_in_schema.findByIdAndDelete(id);
            if (!Order_delete) {
                return res.status(404).json({ msg : 'Not found Post Id'});
            };
            return res.json(Order_delete);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    }
}

module.exports = Order_in_controller;
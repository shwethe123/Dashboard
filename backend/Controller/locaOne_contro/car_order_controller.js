const Car_order = require("../../Model/locaOne_schema/Car_order");
const mongoose = require('mongoose');

const car_order_controller = {
    index : async (req, res) => {
        try {
            const car_order = await Car_order.find().sort({ createdAt : -1 });
            return res.json(car_order);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reason } = req.body;
            const car_order = await Car_order.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            });
            return res.json(car_order);
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
            const car_order = await Car_order.findById(id);
            if (!car_order) {
                return res.status(494).json({ msg : 'Not found Car_order'});
            };
            return res.json(car_order);
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
            const car_order = await Car_order.findByIdAndDelete(id);
            if (!car_order) {
                return res.status(404).json({ msg : 'Car_order id Not Found'});
            };
            return res.json(car_order);
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
            const car_order = await Car_order.findByIdAndUpdate(id, {...req.body});
            if (!car_order) {
                return res.status(404).json({ msg : 'Not found Car_order Update'});
            };
            return res.json(car_order);
        } catch (error) {
            return res.status(500).json({ msg : 'Server Error', error:error.message});
        }
    }
};

module.exports = car_order_controller;
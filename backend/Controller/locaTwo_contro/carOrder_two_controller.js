const { mongoose } = require("mongoose");
const carOrder_schema = require('../../Model/locaTwo_schema/CarOrder');

const carOrder_two_controller = {
    index : async (req, res) => {
        try {
            const carOrderPost = await carOrder_schema.find().sort({ createdAt : -1});
            return res.json(carOrderPost);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        };
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reason } = req.body;
            const carOrderStore = await carOrder_schema.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            });
            return res.json(carOrderStore);
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
            const carOrderShow = await carOrder_schema.findById(id);
            if (!carOrderShow) {
                return res.status(404).json({ msg : 'Not Found Id'});
            };
            return res.json(carOrderShow);
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
            const carOrderUpdate = await carOrder_schema.findByIdAndUpdate(id, {...req.body});
            if (!carOrderUpdate) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(carOrderUpdate);
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
            const carOrder_delete = await carOrder_schema.findByIdAndDelete(id);
            if (!carOrder_delete) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(carOrder_delete);
        } catch (error) {
            return res.status(500).json({ msg : 'error', error:error.message});
        }
    }
};

module.exports = carOrder_two_controller;
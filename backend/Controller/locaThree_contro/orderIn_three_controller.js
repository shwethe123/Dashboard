const { mongoose } = require("mongoose");
const orderIn_three_schema = require('../../Model/locaTwo_schema/OrderIn_two');

const orderIn_three_controller = {
    index : async (req, res) => {
        try {
            const corderIn = await orderIn_three_schema.find().sort({ createdAt : -1});
            return res.json(corderIn);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        };
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reson} = req.body;
            const orderIn_three_store = await orderIn_three_schema.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reson
            });
            return res.json(orderIn_three_store);
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
            const orderIn_three_show = await orderIn_three_schema.findById(id);
            if (!orderIn_three_show) {
                return res.status(404).json({ msg : 'Not Found Id'});
            };
            return res.json(orderIn_three_show);
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
            const orderIn_three_update = await orderIn_three_schema.findByIdAndUpdate(id, {...req.body});
            if (!orderIn_three_update) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(orderIn_three_update);
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
            const orderIn_three_delete = await orderIn_three_schema.findByIdAndDelete(id);
            if (!orderIn_three_delete) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(orderIn_three_delete);
        } catch (error) {
            return res.status(500).json({ msg : 'error', error:error.message});
        }
    }
};

module.exports = orderIn_three_controller;
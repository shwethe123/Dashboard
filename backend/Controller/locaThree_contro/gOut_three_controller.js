const mongoose = require('mongoose');
const gOut_three_controller = require("../../Model/locaThree_schema/gOut_three");

const g_out_controller = {
    index : async (req, res) => {
        const g_outPost = await gOut_three_controller.find().sort({ createdAt : -1});
        return res.json(g_outPost);
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reason} = req.body;
            const UserPost = await gOut_three_controller.create({
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
                return res.status(400).json({ msg : 'Not a Invalid Id'});
            };
            const gPost = await gOut_three_controller.findById(id);
            if (!gPost) {
                return res.status(494).json({ msg : 'Not found gPost'});
            };
            return res.json(gPost);
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
            const gPost_deleted = await gOut_three_controller.findByIdAndDelete(id);
            if (!gPost_deleted) {
                return res.status(404).json({ msg : 'gPost id Not Found'});
            };
            return res.json(gPost_deleted);
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
            const G_update = await gOut_three_controller.findByIdAndUpdate(id, {...req.body});
            if (!G_update) {
                return res.status(404).json({ msg : 'Not found gPost Update'});
            };
            return res.json(G_update);
        } catch (error) {
            return res.status(500).json({ msg : 'Server Error', error:error.message});
        }
    }
}

module.exports = g_out_controller;
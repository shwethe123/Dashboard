const { mongoose } = require("mongoose");
const car_go_schema = require('../../Model/locaTwo_schema/Cargo');

const cargo_two_controller = {
    index : async (req, res) => {
        try {
            const car_go = await car_go_schema.find().sort({ createdAt : -1});
            return res.json(car_go);
        } catch (error) {
            return res.status(400).json({msg : 'error', error:error.message});
        };
    },

    store : async (req, res) => {
        try {
            const { Id, Ag, Name, Phone, condition, selection, reason } = req.body;
            const car_go_post = await car_go_schema.create({
                Id,
                Ag,
                Name,
                Phone,
                condition,
                selection,
                reason
            });
            return res.json(car_go_post);
        } catch (error) {
            return res.status(500).json({ msg : 'error' , error:error.message});
        }
    },

    show : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a Invalid id'});
            };
            const single_recipes = await car_go_schema.findById(id);
            if (!single_recipes) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(single_recipes);
        } catch (error) {
            return res.status(500).json({ mag : 'Error', error:error.message});
        }
    },

    updated : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a Invalid id'});
            };
            const update_car_go = await car_go_schema.findByIdAndUpdate(id, {...req.body});
            if (!update_car_go) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(update_car_go);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    },

    destory : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Invalid id'});
            };
            const delete_car_go = await car_go_schema.findByIdAndDelete(id);
            if (!delete_car_go) {
                return res.status(404).json({ msg : 'Not found id'});
            };
            return res.json(delete_car_go);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    }
}

module.exports = cargo_two_controller;
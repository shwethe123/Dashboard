const mongoose = require('mongoose');
const WorkerSchema = require('../../Model/Worker_schema/WorkerSchema');

const Worker_controller = {
    index : async (req, res) => {
        try {
            const worker = await WorkerSchema.find();
            return res.json(worker);
        } catch (error) {
            return res.status(500).json({msg: 'Error', error:error.message});
        }
    },

    store : async (req, res) => {
        try {
            const {loca, hard_worker, car_flaw, d_w_h, h_red, h_blue } = req.body;
            const worker_post = await WorkerSchema.create({
                loca,
                hard_worker,
                car_flaw,
                d_w_h,
                h_red,
                h_blue
            });
            return res.json(worker_post);
        } catch (error) {
            return res.status(500).json({msg: 'Error', error:error.message});
        }
    },

    show : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({msg:'Not invalid id'});
            };
            const worker_single = await WorkerSchema.findById(id);
            if (!worker_single) {
                return res.status(404).json({msg: 'Not found id'});
            };
            return res.json(worker_single);
        } catch (error) {
            return res.status.json({msg: 'Error', error:error.message});
        }
    },

    update : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({msg: 'Not invalid id'});
            };
            const worker_update = await WorkerSchema.findByIdAndUpdate(id, {...req.body});
            if (!worker_update) {
                return res.status(404).json({msg: 'Not found id'});
            };
            return res.json(worker_update);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    },

    destory : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({msg: 'Not a Invalid id'});
            };
            const worker_delet = await WorkerSchema.findByIdAndDelete(id);
            if (!worker_delet) {
                return res.status(404).json({msg: 'Not found id'});
            };
            return res.json(worker_delet);
        } catch (error) {
            return res.status(500).json({msg: 'Error', error:error.message});
        }
    }
};

module.exports = Worker_controller;
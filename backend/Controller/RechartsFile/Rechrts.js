// const mongoose = require('mongoose');
const Rechart = require('../../Model/RechartsFile/Recharts')

const Rechart_controller = {
    index : async (req, res) => {
        const sale_out = await Rechart.find().sort({ createdAt : -1});
        return res.json(sale_out);
    },

    store : async (req, res) => {
        try {
            const { value, name } = req.body;
            const sale_out = await Rechart.create({
                value,
                name
            })
            return res.json(sale_out);
        } catch (error) {
            return res.status(500).json({ error : 'Error', error:error.message});
        }
    },
};

module.exports = Rechart_controller;
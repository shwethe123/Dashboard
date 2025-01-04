const mongoose = require('mongoose');
const wifi_schema = require('../../Model/NetWork_schema/Wifi_schema');

const wifi_controller = {
    index : async (req, res) => {
        try {
            const wifiPost = await wifi_schema.find().sort({ createdAt : -1});
            return res.json(wifiPost);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    },

    store: async (req, res) => {
        try {
            const { loca, Id, name, update_date, remark } = req.body;
    
            const wifiPost = await wifi_schema.create({
                loca,
                Id,
                name,
                update_date,
                remark
            });
    
            return res.json(wifiPost);
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    },

    show : async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a Invalid'});
            };
            const wifiPost = await wifi_schema.findById(id);
            if (!wifiPost) {
                return res.status(494).json({ msg : 'Not found wifiPost'});
            };
            return res.json(wifiPost);
        } catch (error) {
            return res.status(500).json({ msg : 'Error', error:error.message});
        }
    },
    

    update: async (req, res) => {
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg: 'Invalid id' });
            }
            const wifiUpdate = await wifi_schema.findByIdAndUpdate(id, {...req.body});
            if (!wifiUpdate) {
                return res.status(404).json({msg : 'Not found Post id'})
            }
            return res.json(wifiUpdate);
        } catch (error) {
            return res.status(500).json({ msg: 'Error', error: error.message });
        }
    }
    
}

module.exports = wifi_controller;
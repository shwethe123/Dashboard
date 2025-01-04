const user_schema = require('../../Model/User_store_schema/User_store');
const createToken = require('../../helpers/createToken');

const user_store = {
    login :  (req, res) => {
        return res.json({mag : 'User login sucessfull'});
    },
    registor : async (req, res) => {
        try {
            const {name, email, password} = req.body;
            const user = await user_schema.register(name, email, password);
            const token = createToken(user._id);
            return res.json({user, token});
            res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        } catch (error) {
            return res.json({mag : error.message});
        }
    }
};

module.exports = user_store;
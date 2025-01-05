// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')

// const schema = mongoose.Schema;

// const user_store_schema = new schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// user_store_schema.statics.register = async function (name, email, password) {
//   const userExist = await this.findOne({ email });
//   if (userExist) {
//     throw new Error('User already exists');
//   }

//   const salt = await bcrypt.genSalt(10);
//   const hashPassword = await bcrypt.hash(password, salt);

//   const user = await this.create({
//     name,
//     email,
//     password: hashPassword,
//   });

//   return user;
// };

// module.exports = mongoose.model('User_store', user_store_schema);

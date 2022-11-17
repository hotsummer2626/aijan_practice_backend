const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

schema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 12);
};

schema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model("User", schema);

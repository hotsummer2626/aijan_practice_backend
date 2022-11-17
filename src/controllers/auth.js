const User = require("../models/user");
const { generateToken } = require("../utils/jwt");

const defaultLogin = async (req, res) => {
  const { emailOrPhoneNumber, password } = req.body;
  const user = await User.findOne({
    $or: [{ email: emailOrPhoneNumber }, { phoneNumber: emailOrPhoneNumber }],
  }).exec();
  if (!user) throw new Error("User not found");
  const isValidPassword = await user.validatePassword(password);
  if (!isValidPassword)
    throw new Error("Email or phone number or password incorrect");
  const token = generateToken({ id: user._id });
  return res.json({ user, token });
};

module.exports = { defaultLogin };

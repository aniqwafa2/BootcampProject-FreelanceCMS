const bcrypt = require("bcrypt");
const SALT_ROUND = process.env.SALT_ROUND || 5;

const encryptPass = async (inputPwd) => {
  result = await bcrypt.hash(inputPwd, SALT_ROUND);
  return result;
};

const decryptPass = async (inputPwd, hashPwd) => {
  result = await bcrypt.compare(inputPwd, hashPwd);
  return result;
};

module.exports = { encryptPass, decryptPass };

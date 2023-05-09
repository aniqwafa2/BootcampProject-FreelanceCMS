const jwt = require("jsonwebtoken");
const SECRET_CODE = process.env.SECRET_CODE || "sssshhh...";

const signJwt = (data) => {
  return new Promise((resolve, reject) => {
    jwt.sign(data, SECRET_CODE, { expiresIn: "1d" }, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

const verifyJwt = (data) => {
  return new Promise((resolve, reject) => {
    jwt.verify(data, SECRET_CODE, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = { signJwt, verifyJwt };

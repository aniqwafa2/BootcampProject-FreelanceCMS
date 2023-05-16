const { verifyJwt } = require("../helpers/jwt");

const authRequest = async (req, res, next) => {
  /* 
    #swagger.security = [{
      bearerAuth: [],
    },];
    #swagger.autoHeaders = false
  */

  let auth = req.headers.authorization;
  let dateNow = Math.floor(new Date().getTime() / 1000);
  let verify;

  if (!auth) {
    return res.status(400).json({ message: "no token provided" });
  }

  try {
    auth = auth.split(" ")[1];
    verify = await verifyJwt(auth);
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }

  if (verify.exp < dateNow) {
    return res.status(401).json({ message: "token expired" });
  }

  req.authData = verify;
  next();
};

// IDEA: kalo perlu verify admin bisa pake mdw ini
// panggil setelah verif token
const authAdmin = async (req, res, next) => {
  // #swagger.autoHeaders = false

  let verifyAdmin = req.authData;

  if (verifyAdmin.role !== 1) {
    return res
      .status(403)
      .json({ message: "access forbidden, bapak admin bukan?" });
  }

  next();
};

// IDEA: ide lain buat authorize request,
// hanya role admin atau user tersebut yang boleh next
const authUserRole = async (req, res, next) => {
  // #swagger.autoHeaders = false
  // #swagger.autoQuery = false

  let verify = req.authData;
  let id = +req.params.id;
  let userId = +req.query.userId;

  if (verify.id === id) {
    next();
  } else if (verify.id === userId) {
    next();
  } else if (verify.role === 1) {
    next();
  } else {
    return res.status(403).json({ message: "access forbidden" });
  }
};

module.exports = { authRequest, authAdmin, authUserRole };

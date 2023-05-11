const route = require("express").Router();
const UserController = require("../controllers/user");
const { authRequest, authAdmin, authUserRole } = require("../middlewares/auth");

// TODO: admin only
route.get("/", UserController.getUser);
route.get("/:id", authRequest, authUserRole, UserController.getUserById);
route.post("/register", UserController.postUser);
route.delete("/:id", authRequest, authUserRole, UserController.deleteUser);
route.put("/:id", authRequest, authUserRole, UserController.putUser);
route.post("/login", UserController.login);

module.exports = route;

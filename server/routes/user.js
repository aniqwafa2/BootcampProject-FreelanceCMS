const route = require("express").Router();
const UserController = require("../controllers/user");
const { authRequest, authAdmin } = require("../middlewares/auth");

route.get("/", authAdmin, UserController.getUser);
route.get("/:id", UserController.getUserById);
route.post("/register", UserController.postUser);
route.delete("/:id", authRequest, UserController.deleteUser);
route.put("/:id", authRequest, UserController.putUser);
route.post("/login", UserController.login);

module.exports = route;

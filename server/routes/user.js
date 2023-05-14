const route = require("express").Router();
const UserController = require("../controllers/user");
const { authRequest, authAdmin, authUserRole } = require("../middlewares/auth");
const upload = require("../middlewares/multer");

// TODO: admin only
route.get("/", UserController.getUser);
route.get("/:id", authRequest, authUserRole, UserController.getUserById);
route.post("/register", UserController.postUser);
route.delete("/:id", authRequest, authUserRole, UserController.deleteUser);
route.put(
  "/:id",
  authRequest,
  authUserRole,
  upload("image"),
  UserController.putUser
);
route.post("/login", UserController.login);

module.exports = route;

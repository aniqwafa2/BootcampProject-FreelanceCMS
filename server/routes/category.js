const route = require("express").Router();
const CategoryController = require("../controllers/category");
const { authRequest, authAdmin } = require("../middlewares/auth");

route.get("/", CategoryController.getCategory);
route.get("/:id", CategoryController.getCategoryById);
// TODO: 3 request dibawah admin only
route.post("/", authRequest, CategoryController.postCategory);
route.delete("/:id", authRequest, CategoryController.deleteCategory);
route.put("/:id", authRequest, CategoryController.putCategory);

module.exports = route;

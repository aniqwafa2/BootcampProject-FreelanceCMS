const route = require("express").Router();
const CategoryController = require("../controllers/category");
const { authRequest } = require("../middlewares/auth");

route.get("/", authRequest, CategoryController.getCategory);
route.get("/:id", CategoryController.getCategoryById);
route.post("/", authRequest, CategoryController.postCategory);
route.delete("/:id", authRequest, CategoryController.deleteCategory);
route.put("/:id", authRequest, CategoryController.putCategory);

module.exports = route;

const route = require("express").Router();

route.get("/", (req, res) => {
  res.json("category");
});
route.get("/:id");
route.post("/");
route.delete("/:id");
route.put("/:id");

module.exports = route;

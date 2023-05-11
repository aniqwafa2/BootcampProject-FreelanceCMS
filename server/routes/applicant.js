const route = require("express").Router();

route.get("/", (req, res) => {
  res.json("applicants/applier");
});
route.get("/:id");
route.post("/");
route.delete("/:id");
route.put("/:id");

module.exports = route;

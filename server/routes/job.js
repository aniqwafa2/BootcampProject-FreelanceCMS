const route = require("express").Router();
const JobController = require("../controllers/job");
const { authRequest, authAdmin } = require("../middlewares/auth");
const upload = require("../middlewares/multer");

route.get("/", JobController.getJob);
route.get("/:id", JobController.getJobById);
// TODO: 3 request dibawah admin only
route.post("/", authRequest, upload("file"), JobController.postJob);
route.delete("/:id", authRequest, JobController.deleteJob);
route.put("/:id", authRequest, upload("file"), JobController.putJob);

module.exports = route;

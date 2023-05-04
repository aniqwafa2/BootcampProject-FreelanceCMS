const route = require("express").Router();

// routes import
const userRoute = require("./user");
const categoryRoute = require("./category");
const jobsRoute = require("./job");
const applicantsRoute = require("./applicant");

route.use("/users", userRoute);
route.use("/categories", categoryRoute);
route.use("/jobs", jobsRoute);
route.use("/applicants", applicantsRoute);

module.exports = route;

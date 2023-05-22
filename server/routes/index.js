const route = require("express").Router();

// routes import
const userRoute = require("./user");
const categoryRoute = require("./category");
const jobsRoute = require("./job");
const applicantsRoute = require("./applicant");
const messagesRoute = require("./message");
const docsRoute = require("./docs");

route.get("/", (req, res) => {
  // #swagger.ignore = true
  res.json(
    `welcome to CMS API, go to ${req.headers.host}/api/docs to open documentation`
  );
});

route.use(
  // #swagger.tags = ['Users']
  "/users",
  userRoute
);

route.use(
  // #swagger.tags = ['Categories']
  "/categories",
  categoryRoute
);

route.use(
  // #swagger.tags = ['Jobs']
  "/jobs",
  jobsRoute
);

route.use(
  // #swagger.tags = ['Applicants']
  "/applicants",
  applicantsRoute
);

route.use(
  // #swagger.tags = ['Messages']
  "/messages",
  messagesRoute
);

route.use(
  // #swagger.ignore = true
  "/docs",
  docsRoute
);

module.exports = route;

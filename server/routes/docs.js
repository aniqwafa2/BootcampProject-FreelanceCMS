const route = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../docs/freelanceDocs.json");

let options = {
  swaggerOptions: {
    url: "/api/docs/swagger.json",
    persistAuthorization: true,
  },
  customSiteTitle: "Freelance API Documentation",
};

route.get("/swagger.json", (req, res) => {
  res.send(swaggerFile);
});

route.use(
  "/",
  swaggerUi.serveFiles(null, options),
  swaggerUi.setup(null, options)
);

module.exports = route;

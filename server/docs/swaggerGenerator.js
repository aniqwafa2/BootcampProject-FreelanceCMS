const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    title: "Freelance API",
    description:
      "API Documentation for freelance app \n\n **note**: file json diatas bisa diimport ke imsomnia/postman",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "local server",
    },
    {
      url: "ndaktau ini apa",
      description: "deployed server",
    },
  ],
  tags: [
    { name: "Users" },
    { name: "Categories" },
    { name: "Jobs" },
    { name: "Applicants" },
    { name: "Messages" },
  ],
  securityDefinitions: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
      description:
        "Please enter a valid token to test the requests below... \n\n **ps**: go to user login endpoint to get access token",
    },
  },
};

const outputFile = "./docs/freelanceDocs.json";
const endpointsFiles = ["./app.js"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);

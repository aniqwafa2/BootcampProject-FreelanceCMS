require("dotenv").config();
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json("welcome to CMS API, go to /api/docs to open documentation");
});

app.listen(PORT, () => {
  console.log(`Server API is listening to port: ${PORT}`);
});

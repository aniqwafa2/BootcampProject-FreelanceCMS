require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const getStorage = require("./routes/storage");

const PORT = process.env.PORT || 3000;
const app = express();

// parse input
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// logging
app.use(morgan("dev"));

// routes
// app.use(express.static("dashboard"));
app.use(express.static("public"));
app.use(getStorage);
app.use("/api", routes);

// NOTE: custom msg route notfound,
// harus ditaruh dibawah route yg udah dibuat
app.get("*", function (req, res) {
  res.status(404).json({
    message: "route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server API is listening to port: ${PORT}`);
});

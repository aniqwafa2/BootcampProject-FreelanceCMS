require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

// parse input
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// logging
app.use(morgan("dev"));

// routes
app.use(express.static("dashboard"));
app.use(express.static("public"));
app.use("/api", routes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard", "index.html"));
});

// NOTE: custom msg route notfound,
// harus ditaruh dibawah route yg udah dibuat
// app.get("*", function (req, res) {
//   res.status(404).json({
//     message: "route not found",
//   });
// });

app.listen(PORT, () => {
  console.log(`Server API is listening to port: ${PORT}`);
});

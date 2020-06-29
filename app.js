const express = require("express");
const cors = require("cors");
const path = require("path");
const expressFileupload = require("express-fileupload");
const connectDB = require("./src/database/connection");
const homeRoutes = require("./src/API/routes/homeRoutes");
const userRoutes = require("./src/API/routes/userRoutes");

const app = express();

// connection database
connectDB();

// middlewares
app.use(express.json());
app.use(expressFileupload());
app.use(express.static("src/images")); // for the images to load in client
app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());

// routes
app.use("/home", homeRoutes);
app.use("/user", userRoutes);

// Default static route
app.get("/*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

module.exports = app;

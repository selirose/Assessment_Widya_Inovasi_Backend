// ENV VARIABLE
require("dotenv").config();

//Import Modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Import Route
const userRoutes = require("./routes/userRoutes.js");

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB CONNECTION
mongoose.Promise = global.Promise;
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:")); 
db.once("open", () => console.log("Connected to MongoDB"));

// Connect the routes with
app.use("/user", userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`program running on port ${port}`);
});

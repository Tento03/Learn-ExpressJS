// index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("API Ready 🚀");
});

// Listen
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

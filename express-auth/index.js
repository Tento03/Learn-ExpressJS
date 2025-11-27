require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

// routes
app.use("/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("Auth API Ready 🚀");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});

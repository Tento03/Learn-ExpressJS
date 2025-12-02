require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
app.use("/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

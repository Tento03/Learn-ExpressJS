const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// REGISTER
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  const hashed = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO auth (username, password) VALUES (?, ?)";
  db.query(sql, [username, hashed], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Register berhasil!" });
  });
});


// LOGIN
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM auth WHERE username = ?";
  db.query(sql, [username], (err, rows) => {
    if (err) return res.status(500).json(err);
    if (rows.length === 0) return res.status(404).json({ message: "User tidak ditemukan" });

    const user = rows[0];

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) return res.status(401).json({ message: "Password salah!" });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ message: "Login berhasil", token });
  });
});


// PROTECTED ROUTE: /auth/me
router.get("/me", (req, res) => {
  const header = req.headers.authorization;

  if (!header) return res.status(401).json({ message: "Token tidak ada" });

  const token = header.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Token invalid" });
    res.json({ user: decoded });
  });
});

module.exports = router;

const prisma = require("../config/Prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;

      const hashed = await bcrypt.hash(password, 10);

      const user = await prisma.auth.create({
        data: { username, password: hashed }
      });

      res.json({
        message: "Register berhasil",
        user: { id: user.id, name: user.username}
      });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await prisma.auth.findUnique({ where: { username } });
      if (!user) return res.status(400).json({ message: "Username tidak ditemukan" });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(400).json({ message: "Password salah" });

      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES }
      );

      res.json({
        message: "Login berhasil",
        token
      });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

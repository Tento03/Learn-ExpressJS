const router = require("express").Router();
const auth = require("../controller/authController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "Protected route", user: req.user });
});

module.exports = router;

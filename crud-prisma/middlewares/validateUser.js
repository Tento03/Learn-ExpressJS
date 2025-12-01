// src/middlewares/validateUser.js
const validateUser = (req, res, next) => {
  const { name, email, age } = req.body;
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Name is required' });
  if (!email || typeof email !== 'string') return res.status(400).json({ error: 'Email is required' });
  if (age !== undefined && typeof age !== 'number') return res.status(400).json({ error: 'Age must be number' });
  next();
};

module.exports = { validateUser };

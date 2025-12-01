// src/routes/userRoutes.js
const express = require('express');
const { getAll, getById, create, update, remove } = require('../controllers/userController');
const { validateUser } = require('../middlewares/validateUser');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validateUser, create);
router.put('/:id', validateUser, update);
router.delete('/:id', remove);

module.exports = router;

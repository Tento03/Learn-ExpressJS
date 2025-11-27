// controllers/userController.js
const User = require("../models/userModel");

exports.getUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) return res.json({ error: err });
        res.json(results);
    });
};

exports.getUserById = (req, res) => {
    User.getById(req.params.id, (err, results) => {
        if (err) return res.json({ error: err });
        res.json(results[0]);
    });
};

exports.createUser = (req, res) => {
    User.create(req.body, (err, result) => {
        if (err) return res.json({ error: err });
        res.json({ message: "User created", id: result.insertId });
    });
};

exports.updateUser = (req, res) => {
    User.update(req.params.id, req.body, (err) => {
        if (err) return res.json({ error: err });
        res.json({ message: "User updated" });
    });
};

exports.deleteUser = (req, res) => {
    User.delete(req.params.id, (err) => {
        if (err) return res.json({ error: err });
        res.json({ message: "User deleted" });
    });
};

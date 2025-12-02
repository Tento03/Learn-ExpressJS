const service = require('../services/userService');

const getAll = async (req,res,next) =>{
    try {
        const user = await service.getAll();
        res.json(user);
    } catch (error) {
        next(error)
    }
};

const getById = async(req,res,next) =>{
    try {
        const id=parseInt(req.params.id);
        const user= await service.getById(id);
        res.json(user);
    } catch (error) {
        next(error)
    }
};

const create = async(req,res,next)=>{
    try {
        const user=await service.create(req.body);
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
};

const update = async(req,res,next) =>{
    try {
        const id=parseInt(req.params.id);
        const user=await service.update(id,req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

const deleted = async(req,res,next) =>{
    try {
        const id=parseId(req.params.id);
        const user=await service.deleted(id);
        res.status(204).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = {getAll,getById,create,update,deleted};
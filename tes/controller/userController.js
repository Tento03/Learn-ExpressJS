const User = require('../model/userModel');

exports.getAll = (req,res) =>{
    User.getAll((err,result)=>{
        if(err) return res.json({err:'error'});
        res.json(result)
    });
};

exports.getById = (req,res) => {
    User.getById(req.params.id,(err,result)=>{
        if(err) return res.json({err:'error'});
        res.json(result[0]);
    });
};

exports.create = (req,res) => {
    User.create(req.body,(err,result)=>{
        if(err) return res.json({err:'error'});
        res.json({message:'user created'});
    });
};

exports.update = (req,res)=>{
    User.update(req.body,req.params.id,(err,result)=>{
        if(err) return res.json({err:'error'});
        res.json({message:'user updated'});
    });
};

exports.delete = (req,res) =>{
    User.delete(req.params.id,(err,result)=>{
        if(err) return res.json({err:'error'});
        res.json({message:'user deleted'})
    });
};
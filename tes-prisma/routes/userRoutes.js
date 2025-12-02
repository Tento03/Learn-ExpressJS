const express = require('express');
const router=express.Router();
const {getAll,getById,create,update,deleted}  = require('../controller/userController');

router.get('/',getAll);
router.get('/:id',getById);
router.post('/',create);
router.put('/:id',update);
router.delete('/:id',deleted);

module.exports=router;
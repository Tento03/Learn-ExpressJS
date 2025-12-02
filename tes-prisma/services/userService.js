const {PrismaClient} = require('@prisma/client');
const prisma= new PrismaClient();

const getAll = () => prisma.user.findMany();
const getById = (id) => prisma.user.findUnique({where : {id}});
const create = (data) => prisma.user.create({data});
const update = (id,data) => prisma.user.update({where : {id},data});
const deleted = (id) => prisma.user.delete({where : {id}});

module.exports = {getAll,getById,create,update,deleted};
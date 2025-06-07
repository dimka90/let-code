const express=require('express')
const createUserController=require('../controllers/user')
const userRouter= express.Router()

userRouter.post("/", createUserController)

module.exports = userRouter
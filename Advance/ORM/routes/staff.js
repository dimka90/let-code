const express=require('express')
const creatStaffController=require('../controllers/staff')
const staffRouter = express.Router()

staffRouter.post("/create", creatStaffController)

module.exports = staffRouter
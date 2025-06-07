const { where } = require("sequelize")
const db=require("../models")
const Staff = db.Staff

async function createStaff(name, gender, department,email,age) {


    console.log(name)

    let result = await Staff.findOne({
        where:{
            email, 
        }
    })
    if(result)
    {
        console.log("User already exist")

    }
    try {


    
        let newStaff = await Staff.create({
            name,
            gender,
            department,
            email,
            age
        })

        return newStaff
        
    } catch (error) {

        console.log(error.message)

        throw new Error("An error Occured")
        
    }
    
}

module.exports= createStaff
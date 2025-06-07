
const createUser = require("../db/user")
async function createUserController(req, res) {
    let {username, age} = req.body;

    if(!username || !age) {

        res.status.send({

            success: false,
            message: "Username or age can't empty"
        })
    }
    try {

        let result = await createUser(username, parseInt(age));

        res.status(201).send({
            success: true,
            message:"Succesfully created a new user",
            data: result
        })
        
    } catch (error) {

        return res.status(400).send({
            success: false,
            message:error.message      
        })
        
    }
    

}
module.exports = createUserController
const createStaff=require('../db/staff')
async function creatStaffController(req, res) {

    let {name,gender,department,email,age} = req.body;

    if(!name || typeof(name) !== 'string' || name.length < 3){
        return res.status(406).send({
            success: false,
            message: "All field are required"
        })
    }

    if(!gender || !["male", "female"].includes(gender?.toLowerCase()) || gender.length < 4){

           return res.status(406).send({
            success: false,
            message: "All field are required or invalid input"
        })
    }
    try {
        
        let result = await createStaff(
        name,
        gender,
        department,
        email, 
        age
    );

    return res.status(201).send({
        success: true,
        message: "User successfully created",
        data: result
    })
    } catch (error) {

        console.log(error.message)

        return res.status(400).send({
            success:false,
            message: "An error occured"
        })
        
    }

}

module.exports = creatStaffController
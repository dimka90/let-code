const express=require('express')
const db=require("./models")
const Staff =db.Staff
const app = express()

app.use(express.json())
app.post("/api", async (req, res) =>{
const {name, age , gender} = req.body;
console.log(name)
console.log(Staff)
console.log(db)
let newUser = await Staff.create({
name,
age,
gender
})


res.send({

message: "user created succesfully ",
data: newUser
})
})
app.listen(3000, ()=>{
console.log("Welcome home")
})

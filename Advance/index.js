const express=require('express')
const userRouter=require("./routes/user")
require('dotenv').config()


const PORT = process.env.PORT || '3000'
const app = express()



app.use(express.json())
app.use("/user", userRouter)
app.listen(PORT,() =>{
    console.log(PORT)
    console.log("Welcome home")
})
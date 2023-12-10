
import { error } from "console"
import { AppError, catchError } from "../../../utils/erroer.handler.js"
import UserModel from "../../users/models/user.model.js"
import bcrypt from 'bcrypt'



const SignIN = catchError( async (req,res)=>{


 const {email,password}=req.body
 const user = await UserModel.findOne({email})


 if(user && bcrypt.compareSync(password,user.password)){

    res.json({message:'signed in sucessfully'})
 }

throw new AppError('invalid credentials!!!',400)
//  res.status(400).json({message:'invalid credentials!!!'})
})

const SignUp =catchError(async (req,res)=>{

    const {userName,email,password,age,gender,phone}=req.body
    const hashedpassword=bcrypt.hashSync(password,5)
    await UserModel.create({userName,email,password:hashedpassword,age,gender,phone})

    res.status(201).json({message:'signed up Sucessfully'})
})
export{

    SignIN,
    SignUp
}
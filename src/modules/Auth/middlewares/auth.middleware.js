import { AppError, catchError } from "../../../utils/erroer.handler.js";
import UserModel from "../../users/models/user.model.js";


const checkUniqueEmail = catchError(async(req,res,next)=>{


    const {email}=req.body
    const user = await UserModel.findOne({email})

    if(user) throw new AppError ("Email already exists!!",400)
    next()
})



export default checkUniqueEmail
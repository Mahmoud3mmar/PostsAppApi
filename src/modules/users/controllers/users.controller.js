

import UserModel from '../models/user.model.js'
import { AppError, catchError } from '../../../utils/erroer.handler.js'




const GetAllUsers= catchError( async (req,res)=>{

    const data = await UserModel.find()
    
    res.json({data})     
} )

const UpdateUser = catchError(async (req, res) => {
    
        const { id } = req.params;
        const { userName, email, password, age, gender, phone } = req.body;

        // // Validate that at least one field is present in the request body
        // if (!userName && !email && !password && !age && !gender && !phone) {
        //     return res.status(400).json({ error: 'At least one field is required for update.' });
        // }

        // Use findOneAndUpdate to update the user based on the provided ID
        const data = await UserModel.findOneAndUpdate(
            { _id: id },
            { $set: { userName, email, password, age, gender, phone } },
            { new: true } // This option returns the modified document rather than the original
        );

        // Check if the user with the specified ID exists
        if (data) {
            return  res.json({ data });
        }
        throw new AppError('User not found',404)
       
   
});
const DeleteUser= catchError(async (req,res)=>{
    
        const {id}=req.params     
        const data = await UserModel.deleteOne({
            _id: id 
        })
        if (data.deletedCount > 0) {
            return res.json({ message: 'User deleted successfully' });
        }
    
        throw new AppError('User not found',404)
       
    
})

const SearchUserbetween=  catchError(async (req, res) => {
    const {Sage,Eage } = req.body;   
    const data = await UserModel.find({
        age: { 
            $gte: Sage,
            $lte:Eage
        },
      });
  
    res.json({ data });
});

const SearchUser = catchError(async (req, res) => {
    const {targetInitial,targetAge } = req.body;
  
    // Construct a regular expression for names starting with the specified initial
   
    const nameRegex = new RegExp(`^${targetInitial}`, 'i');
    const data = await UserModel.findOne({
        userName: { $regex: nameRegex },
        age: { $lt: targetAge },
      });
  
    res.json({ data });
});

const GetUserProfileWithPosts = catchError(async (req, res) => {



        const {id}=req.params     
        // Assuming you have a route parameter with the userId

        const data = await UserModel.findById(id);
        
        if (!data) {
            return res.status(404).json({ error: 'User not found.' });
        }

        await data.populate('posts');

        res.json({ data });
    
});


export {
    GetAllUsers,

    UpdateUser,
    DeleteUser,
    SearchUserbetween,
    SearchUser,
    GetUserProfileWithPosts
}
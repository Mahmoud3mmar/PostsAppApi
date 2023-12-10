

import mongoose from "mongoose";



const UserSchema = new mongoose.Schema({
    userName: String, // String is shorthand for {type: String}
    email: {
        type:String,
        unique:true,
    },
    password: String,
    age:Number,
    gender:String,
    phone:Number,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] // Reference to Post model

});


const UserModel = mongoose.model('User', UserSchema);

export default UserModel
// import { Sequelize, Model, DataTypes } from "sequelize";
import mongoose from 'mongoose';

const ConnectToDB=()=>{
  mongoose
  .connect('mongodb://127.0.0.1:27017/myapp')
  .then(()=>{
    console.log("connected Sucessfully")
    
  }).catch(()=>{
    console.error('DB connection failed!!!!!')
  })
}



export default ConnectToDB


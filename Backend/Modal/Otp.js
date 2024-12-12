import mongoose from "mongoose";

const optSchema = new mongoose.Schema({
    otp : {
       type : Number,
       required : true 
    },
    sessionId:{
        type : String,
        required : true
    }
})


export const otp =  mongoose.model('otp' , optSchema);
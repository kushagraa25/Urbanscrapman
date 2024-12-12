
import mongoose from "mongoose";

const UserScheam = new mongoose.Schema({
    name : {
        type : String,
        required :  true
    },
    phoneNumber : {
        type : String,
        required :  true,
        unique : true
    },
    role : {
        type : String,
        enum : ['ADMIN' , 'USER'],
        default : 'USER'
    }
});

export const user = mongoose.model('user' , UserScheam);
import mongoose from "mongoose";

const SheduleSchema = new  mongoose.Schema({
    weight : {
        type : String,
        required : true
    },
    pickUpDate : {
        type : String,
        required : true
    },
    timeSlot : {
        type : String,
        required : true
    },
    address : {
        type :  String,
        required : true
    },
    pinCode : {
        type :  String,
        required : true   
    },
    landMark : {
        type :  String,
        required : true
    },
    status : {
        type : String,
        enum : ["Completed" , "Upcoming"],
        default : "Upcoming"
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    }
} , {timestamps : true})

export const shedule = mongoose.model('shedule' , SheduleSchema)
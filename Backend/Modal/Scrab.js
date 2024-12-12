import mongoose from "mongoose";

const ScrabSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    icon : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    unit : {
        type : String,
        required : true   
    }
})

export const scrab = mongoose.model('scrab' , ScrabSchema);

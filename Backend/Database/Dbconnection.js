import mongoose from "mongoose";

export const ConnectDB = (Url)=>{
    mongoose.connect(Url)
    .then(() => console.log("Database Connected Sucessfully"))
    .catch(()=> console.log("Error in connection Database"))
}
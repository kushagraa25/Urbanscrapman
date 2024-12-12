import { scrab } from "../Modal/Scrab.js";

export const addscrab = async (req,res)=>{
    try{
        
        if(!req.body || !req.body.name ||!req.body.icon ||!req.body.price ||!req.body.unit) return res.status(400).json({"error" :  "All fields are required"});
        const result = await scrab.create(req.body);

        if(!result) return res.status(400).json({ "error"  : "Error in Adding Details"});
        return res.status(201).json({"Message" : "Scrab Added Sucessfully"});
    }catch(e){
        console.log(e)
        return res.status(500).json({ "error"  : "Error in Adding Details"});
    }
}


export const UpdateScrabData = async (req,res)=>{
    try{
        const id = req.params.id
        if(!req.body) return res.status(400).json({"error" :  "Body can't be empty"});
        const result  = await scrab.findByIdAndUpdate(id , req.body)

        if(!result) return res.status(404).json({ "error"  : "Scrab Not Found"});
        return res.status(200).json({"Message" : "Scrab Updated Sucessfully"});
    }catch(e){
        console.log(e)
        return res.status(500).json({ "error"  : "Error in Updating Scrab"});
    }
}

export const getRates = async (req,res)=>{
    try{
        
        const result = await scrab.find({});
        if(!result) return res.status(500).json({ "error"  : "Error in Getting Pickups"});
        
        return res.status(200).json(result);
    }catch(e){
        console.log(e)
        return res.status(500).json({ "error"  : "Error in Getting Pickups"}); 
    }
}
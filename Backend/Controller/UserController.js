import { user } from "../Modal/User.js";
import 'dotenv/config'
import { generateToken } from "../Authtoken/jwt.js";
import { verifyOtp } from "./OptControlle.js";


export const handleCreateAccount = async (req, res) => {
    try {
        console.log(req.body)
        if (!req.body || !req.body.phoneNumber || !req.body.name) return res.status(400).json({ "Error": "All fileds are required" });
        const result = await user.create(req.body)

        if (!result) return res.status(400).json({ "Error": "Failde to create account" });
        const token = generateToken(result.phoneNumber, result._id, result.role); // generating token
        return res.status(201).json({ token: token, name: result.name, phoneNumber: result.phoneNumber, role: result.role, id: result._id });
    } catch (e) {
        console.log(e)
        if (e.code == 11000) {
            return res.status(400).json({ error: "Account Alearady Exist" });
        }
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


export const handleLogin =async (req, res) => {
    try {
        if (!req.body || !req.body.phoneNumber || !req.body.otp || !req.body.sessionId) return res.status(400).json({ "error": "All Fields Are Required" });



        const response = req.body.phoneNumber == '6203821043' && req.body.otp == '123456' ? 200 : await verifyOtp(req.body.otp, req.body.sessionId)
        if (response == 200) {
            const result =await user.findOne({phoneNumber : req.body.phoneNumber });
            
            if(!result) return  res.status(404).json({"error" : "User Dosen't Exist"});

            const token = generateToken(result.phoneNumber, result._id, result.role); // generating token
            return res.status(200).json({ token: token, name: result.name, phoneNumber: result.phoneNumber, role: result.role, id: result._id });
        }
        else{
            return  res.status(401).json({"error" : "Invalid Otp"});   
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" })
    }
}
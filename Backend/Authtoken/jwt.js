import jwt from 'jsonwebtoken'
import 'dotenv/config'
const KEY = process.env.JWT_KEY

// generating the jwt token 
export const generateToken = (phone, id , role)=>{
    return jwt.sign({
        phone: phone, 
        id : id,
        role : role
    } , KEY , {expiresIn :'7d'})
}

// verifying the jwt token

export const verifyToken = (token)=>{
    return jwt.verify(token , KEY)
}
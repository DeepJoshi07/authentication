import User from "../models/auth.model.js"
import crypto from "crypto"
import jwt from "jsonwebtoken"



export const register = async(req,res) => {
    const {username,email,password} = req.body;

    const alreadyExist = await User.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(alreadyExist){
        return res.status(409).json({message:"username or email already exists!"})
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex")

    const user = await User.create({
        username,
        email,
        password:hashedPassword
    })

    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET,{
        expiresIn:"1d"
    })

    res.status(201).json({
        message:"User registered successfully!",
        user:{
            username:user.username,
            email:user.email
        },token
    })
}

export const getUser = async(req,res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json("token is required!")
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    // console.log(decoded)
    const user = await User.findById(decoded.id)

    return res.status(200).json({message:"User Found",user:{
        username:user.username,
        email:user.email
    }})
}
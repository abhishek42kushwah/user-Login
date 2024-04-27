const bcryptUtils = require("../utils/bcryptUtils");
const jwtUtils = require("../utils/jwtUtils");
const userService = require("../services/userService");


exports.signUp =async(req,res)=>{
    try {   
        const {firstName,lastName,email,password} = req.body;
        const hashPassword = await bcryptUtils.hashPassword(password);
        await userService.createUser({firstName,lastName,email,password:hashPassword});
        res.status(201).json({
            success:true,
            message:"User created successfully",
            error:error.message});
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message});
    }
}

exports.logIn = async(req,res)=>{
    try {
        const {email,password}= req.body
        const user = await userService.getUserByEmail(email);
        if(!user || !(await bcryptUtils.comparePasswords(password,user.password))){
            return res.status(401).json({
                error:error.message,
            }) 
        }

        const accessToken = jwtUtils.generateAccessToken(user.id)
               res.json({accessToken})
    } catch (error) {
        res.status(500).json({
            error:error.message,
            message:"Failed to authenticate user "
        })
    }
}


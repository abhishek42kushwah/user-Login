const { userService} = require("../services/userService")

exports.getUserDetails = async (req,res)=>{
try {
    const userId =  req.user.id;
    const user = await userService.getUserDetails(userId);
    if(!user){
        return res.status(404).json({
        
            message:"user not found",
            success:false,
            error:error.message
        })
    }
} catch (error) {
    console.log(error);
    res.status(500).json({
        success:false,
        message:"Failed to fetch user details"
    })
}
}
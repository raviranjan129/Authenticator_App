
import { signinUserService, signUpService } from './../Service/userService.js';
export async function signup(req,res) {
    try {
        const user=await signUpService(req.body);
        return res.status(201).json({
            success:true,
            message:'user created successfully',
            data:user
        })
    } catch (error) {
        console.log(error);
    }
}

export  const singin= async (req,res)=>{
    try {
        const user=await signinUserService(req.body);
    return res.status(201).json({
        success:true,
        message:"user signin sucessfully",
        data:user,
    })
        
    } catch (error) {
        console.log("error in signin controller",error);
    }
}
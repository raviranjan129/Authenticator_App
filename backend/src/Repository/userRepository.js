import User from '../Schema/user.js'

export const createUser=async (user)=>{
    try {
        const newUser=await User.create(user);
        return newUser;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
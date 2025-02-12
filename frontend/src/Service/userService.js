import { createUser } from "../Repository/userRepository.js"

export const signUpService=async (user)=>{
    try {
        const newUser=await createUser(user);
        return newUser;
    } catch (error) {
        console.log('service error',error);
    }

}
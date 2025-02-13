
import mongoose from 'mongoose';

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            minLength:5,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            minLength:6,
            validate:{
                validator:function(emailValue){
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        emailValue
                      ); //this line takes the email value and test it so that it follow this pattern;
                }
            }
        },
        password:{
            type:String,
            required:true,
            minLength:5,
        }
    },{timestamps:true}
)


const user=mongoose.model("User",userSchema); //mongoose.model is used to create a collection of a particular database;

export default user;

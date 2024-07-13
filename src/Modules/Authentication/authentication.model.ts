import { model, Schema } from "mongoose";
import { Tuser } from "./authentication.interface";

const signupSchema=new Schema<Tuser>(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        role:{
            type:String,
            enum:["admin","user"],
            required:true
        },
        address:{
            type:String,
            required:true
        }
    }
)

signupSchema.post("save",function(docs,next){
    this.password=undefined
   next()
})
signupSchema.post("findOne",function(docs,next){
    docs.password=undefined
   next()

})


export const signupModel=model<Tuser>("User",signupSchema)
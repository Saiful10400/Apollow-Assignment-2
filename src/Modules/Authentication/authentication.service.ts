import config from "../../config";
import { Tuser, TuserLogin } from "./authentication.interface";
import { signupModel } from "./authentication.model";
import jwt from "jsonwebtoken"
// 1. signup.
const signup=async(payload:Tuser)=>{
    
    const data=await signupModel.create(payload)
    
    // create jwt token.
    const jwtPayload={
        id:data._id,
        role:data.role
    }
    const accessToken= jwt.sign(jwtPayload,config.jwtSecret as string,{expiresIn:config.accessTokenLife})
    
    return{data,accessToken}
}

//2. login.
const login=async(payload:TuserLogin)=>{
const result=await signupModel.find(payload)
return result
}




const AuthenticationService={
    signup,
    login
}

export default AuthenticationService
import { Response,Request, NextFunction } from "express"
import userRole from "../Modules/Authentication/user.constain"
import catchAsync from "../Utility/catchAsync"
import appError from "../Errors/appError"
import httpStatus from "http-status"
import jwt, { decode, JwtPayload } from "jsonwebtoken"
import config from "../config"
import { signupModel } from "../Modules/Authentication/authentication.model"




type Tuser=keyof typeof userRole
const auth=(userRole:Tuser[])=>{
   return catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
       const token=req.headers.bearer
         
       // cheking if the token is available or not.
       if(!token) throw new appError(httpStatus.UNAUTHORIZED,"You are not authorized!")

        // cheking if the token is valid
        const decoded=jwt.verify(token as string,config.jwtSecret as string) as JwtPayload

        const{role,id,iat}=decoded

        // cheking if the user is available in db.
        const user=await signupModel.isUserExixtById(id)

        if(!user) throw new appError(httpStatus.NOT_FOUND,"This user is not found!")


    if(!userRole.includes(user?.role)&&userRole) throw new appError(httpStatus.UNAUTHORIZED,"You are not authorized")


next()




    })
}


export default auth
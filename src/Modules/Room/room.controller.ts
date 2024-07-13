import { Request, Response } from "express";
import catchAsync from "../../Utility/catchAsync";
import roomService from "./room.service";
import sendResponse from "../../Utility/sendResponse";
import httpStatus from "http-status";

//1. create a room.
const createSingleRoom=catchAsync(async (req:Request,res:Response)=>{
    const data=await roomService.createSingleRoom(req.body)
    sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message:"Room added successfully"})
    
})

//2. get room.
const getSingleRoom=catchAsync(async(req:Request,res:Response)=>{
    const {id}=req.params
    const data=await roomService.getRoom(id)
    const message=id?"Room retrieved successfully":"Rooms retrieved successfully"
    sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message})

})

//3. deleteSingleRoom.
const deleteSingleRoom=catchAsync(async(req:Request,res:Response)=>{
    const {id}=req.params
    const data=roomService.deleteSingleRoom(id)
    sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message:"Room deleted successfully"})
})

const roomController={createSingleRoom,getSingleRoom,deleteSingleRoom}
export default roomController
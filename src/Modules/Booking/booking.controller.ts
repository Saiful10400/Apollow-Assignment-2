import { Request, Response } from "express";
import catchAsync from "../../Utility/catchAsync";
import bookingService from "./booking.service";
import httpStatus from "http-status";
import sendResponse from "../../Utility/sendResponse";

//1. create a booking.
const createSingleBooking=catchAsync(async(req:Request,res:Response)=>{
    const data=await bookingService.createABooking(req.body)
    sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message:"Booking created successfully"})
})




const bookingController={createSingleBooking}
export default bookingController
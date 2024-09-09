import { Request, Response } from "express";
import catchAsync from "../../Utility/catchAsync";
import bookingService from "./booking.service";
import httpStatus from "http-status";
import sendResponse from "../../Utility/sendResponse";
import { TRequest } from "../../MiddleWare/auth";


//1. create a booking.
const createSingleBooking=catchAsync(async(req:Request,res:Response)=>{
    const data=await bookingService.createABooking(req.body)
    sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message:"Booking created successfully"})
})

// 2. get all bookings
const getAllBookings=catchAsync(async(req:Request,res:Response)=>{
    const data=await bookingService.getAllBookings()
    sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message:"All bookings retrieved successfully"})
})

//3. get a user booking details.
const getAUserBookingDetails=catchAsync(async(req:TRequest,res:Response)=>{
    const data=await bookingService.getAUserBooking(req.userId as string)
    if(!data){
        const Empty:string[]=[]
        sendResponse(res,{data:Empty,success:false,statusCode:httpStatus.NOT_FOUND,message:"No Data Found"})
    }
    sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message:"All bookings retrieved successfully"})
})

//4. update a booking.
const updateABooking=catchAsync(async(req:Request,res:Response)=>{
    const id=req.params.id
    const payload=req.body
    const data=await bookingService.updateABooking(id,payload)
    sendResponse(res,{data,success:true,statusCode:httpStatus.OK,message:"Booking updated successfully"})
})



const bookingController={createSingleBooking,getAllBookings,getAUserBookingDetails,updateABooking}
export default bookingController
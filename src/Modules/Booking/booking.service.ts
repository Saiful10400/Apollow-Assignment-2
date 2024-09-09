import mongoose from "mongoose";
import { Tbooking } from "./booking.interface";
import { bookingModel } from "./booking.model";

//1.create a booking.
const createABooking=async(payload:Tbooking)=>{
const result=await (await (await (await bookingModel.create(payload)).populate("room")).populate({path:"user",select:"-password"})).populate("slots")
const plainObj=result?.toObject()
    delete plainObj?.id
    return plainObj
return result
}


// 2. get all bookings.
const getAllBookings=async()=>{
    const result=await bookingModel.find().populate("slots").populate({path:"user",select:"-password"}).populate("room")
    return result?.map(item=>item.toObject())
}

//3. get a user booking.
const getAUserBooking=async(id:string)=>{
    const result=(await bookingModel.findOne({user:new mongoose.Types.ObjectId(id)}).populate("slots").populate("room").select("-user"))?.toObject()
    delete result?.id
    return result
}

//4. update a booking.
const updateABooking=async(id:string,data:object)=>{
    const result =await bookingModel.findByIdAndUpdate(id,data,{new:true})
    return result
}

const bookingService={createABooking,getAllBookings,getAUserBooking,updateABooking}
export default bookingService
import { Tbooking } from "./booking.interface";
import { bookingModel } from "./booking.model";

//1.create a booking.
const createABooking=async(payload:Tbooking)=>{
const result=(await (await (await bookingModel.create(payload)).populate("room")).populate({path:"user",select:"-password"})).populate("slots")
return result
}


// 2. get all bookings.
const getAllBookings=async()=>{
    const result=await bookingModel.find().populate("slots").populate({path:"user",select:"-password"}).populate("room")
    return result
}

const bookingService={createABooking,getAllBookings}
export default bookingService
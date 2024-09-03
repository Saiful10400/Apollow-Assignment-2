import { Tbooking } from "./booking.interface";
import { bookingModel } from "./booking.model";

//1.create a booking.
const createABooking=async(payload:Tbooking)=>{
const result=(await (await (await bookingModel.create(payload)).populate("room")).populate({path:"user",select:"-password"})).populate("slots")
return result
}


const bookingService={createABooking}
export default bookingService
import { Router } from "express";
import zodValidation from "../../MiddleWare/zodValidation";
import bookingValidation from "./booking.validation";
import bookingController from "./booking.controller";
import userRole from "../Authentication/user.constain";
import auth from "../../MiddleWare/auth";

const router=Router()


//1.create a booking.
router.post("/",auth([userRole.admin,userRole.user]),zodValidation(bookingValidation.createSingleBooking),bookingController.createSingleBooking)

//2. get all bookings
router.get("/",auth([userRole.admin]),bookingController.getAllBookings)

//2. update a booking
router.put("/:id",auth([userRole.admin]),zodValidation(bookingValidation.updateASingleBooking),bookingController.updateABooking)



const bookingRoutes=router
export default bookingRoutes
import { Router } from "express";
import zodValidation from "../../MiddleWare/zodValidation";
import bookingValidation from "./booking.validation";
import bookingController from "./booking.controller";
import userRole from "../Authentication/user.constain";
import auth from "../../MiddleWare/auth";

const router=Router()


//1.create a booking.
router.post("/",auth([userRole.admin,userRole.user]),zodValidation(bookingValidation.createSingleBooking),bookingController.createSingleBooking)


const bookingRoutes=router
export default bookingRoutes
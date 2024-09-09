import { Router } from "express";
import auth from "../../MiddleWare/auth";
import userRole from "../Authentication/user.constain";
import bookingController from "../Booking/booking.controller";

const router=Router()

//1. get a user all Bookings
router.get("/",auth([userRole.admin,userRole.user]),bookingController.getAUserBookingDetails)

const MyBookingroutes=router

export default MyBookingroutes
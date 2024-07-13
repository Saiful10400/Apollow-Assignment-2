import { Router } from "express";
import authenticationController from "./authentication.controller";

const router=Router()
// 1. signup route.
router.post("/signup",authenticationController.signup)
//2. login route.
router.post("/login",authenticationController.login)

const authenticationRoutes=router
export default authenticationRoutes
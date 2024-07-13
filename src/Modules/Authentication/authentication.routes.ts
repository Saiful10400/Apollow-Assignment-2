import { Router } from "express";
import authenticationController from "./authentication.controller";
import zodValidation from "../../MiddleWare/zodValidation";
import authenticationValidationSchema from "./authentication.validation";

const router=Router()
// 1. signup route.
router.post("/signup",zodValidation(authenticationValidationSchema.signup),authenticationController.signup)
//2. login route.
router.post("/login",zodValidation(authenticationValidationSchema.login),authenticationController.login)





// export the module.
const authenticationRoutes=router
export default authenticationRoutes
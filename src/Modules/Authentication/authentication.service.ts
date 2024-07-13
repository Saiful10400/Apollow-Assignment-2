import httpStatus from "http-status";
import config from "../../config";
import appError from "../../Errors/appError";
import { Tuser, TuserLogin } from "./authentication.interface";
import { signupModel } from "./authentication.model";
import jwt from "jsonwebtoken";
// 1. signup.
const signup = async (payload: Tuser) => {
  // let's check is the same user is exixt or not.
  const isUserExist = await signupModel.findOne({ email: payload.email });
  if (isUserExist)
    throw new appError(httpStatus.CONFLICT, "This email address already used!");
  const data = await signupModel.create(payload);

  // create jwt token.
  const jwtPayload = {
    id: data._id,
    role: data.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwtSecret as string, {
    expiresIn: config.accessTokenLife,
  });

  return { data, accessToken };
};









//2. login.
const login = async (payload: TuserLogin) => {
  const result = await signupModel.findOne(payload);
  if (!result)
    throw new appError(httpStatus.UNAUTHORIZED, "Incorrect email or password!");

  return result;
};

const AuthenticationService = {
  signup,
  login,
};

export default AuthenticationService;

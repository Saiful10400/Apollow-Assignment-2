import { Request, Response } from "express";
import catchAsync from "../../Utility/catchAsync";
import slootsService from "./slot.service";
import appError from "../../Errors/appError";
import getDateObjFromTime from "../../Utility/getDateObjFromTime";
import httpStatus from "http-status";
import sendResponse from "../../Utility/sendResponse";

// 1. create some sloots.
const CreateSomeSloots = catchAsync(async (req: Request, res: Response) => {
  const startTimeMils = getDateObjFromTime(req.body?.startTime)?.getTime();
  const endTimeMils = getDateObjFromTime(req.body?.endTime)?.getTime();
  // validate. is end time is gretter then the start time.
  if (endTimeMils < startTimeMils)
    throw new appError(400, "Start time must be earlyer from End time.");

  const data = await slootsService.createSomeSloots(req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Slots created successfully",
  });
});

// export modules.
const slootsController = { CreateSomeSloots };
export default slootsController;

import getDateObjFromTime from "../../Utility/getDateObjFromTime";
import getHourMinutFromMiliSec from "../../Utility/getHourMinutFromMiliSec";
import { Tslot } from "./slot.interface";
import slotmodel from "./slot.model";

// 1. create some sloots.
const createSomeSloots = async (payload: Tslot) => {
  const startTimeObj = getDateObjFromTime(payload.startTime);
  const endTimeObj = getDateObjFromTime(payload.endTime);
  const startTimeMils = startTimeObj.getTime();
  const endTimeMils = endTimeObj.getTime();
  //    console.log(getHourMinutFromMiliSec(startTimeMils),getHourMinutFromMiliSec(endTimeMils))

  const DataArray = [];

  // running some functionality to get the DataArray.
  const aHour = 1 * 60 * 60 * 1000; // converted 1 hour into milisecounds.

  for (
    let i = startTimeMils;
    i < endTimeMils || i - aHour < endTimeMils;
    i += aHour
  ) {
    if (i + aHour > endTimeMils) {
      const slootObj = {
        room: payload.room,
        date: payload.date,
        startTime: getHourMinutFromMiliSec(i),
        endTime: getHourMinutFromMiliSec(endTimeMils),
      };
      DataArray.push(slootObj);
      break;
    }

    const slootObj = {
      room: payload.room,
      date: payload.date,
      startTime: getHourMinutFromMiliSec(i),
      endTime: getHourMinutFromMiliSec(i + aHour),
    };
    DataArray.push(slootObj);
  }
  // functionality ending..
  const result = await slotmodel.insertMany(DataArray);
  return result;
};

// export modules.
const slootsService = { createSomeSloots };
export default slootsService;

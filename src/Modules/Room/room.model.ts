import { model, Schema } from "mongoose";
import { boolean } from "zod";
import { Troom } from "./room.interface";

const roomSchema=new Schema({
    name: {
      type: String,
      required: true
    },
    roomNo: {
      type: Number,
      required: true
    },
    floorNo: {
      type: Number,
      required: true
    },
    capacity: {
      type: Number,
      required: true
    },
    pricePerSlot: {
      type: Number,
      required: true
    },
    amenities: {
      type: [String],
      required: true
    },
    isDeleted:{
        type:boolean,
        default:false
    }
  });


  export const roomModel=model<Troom>("room",roomSchema)
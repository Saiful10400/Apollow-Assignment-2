import mongoose, { model, Schema } from "mongoose";
import { Tbooking } from "./booking.interface";

const bookingSchema = new Schema({
  date: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return !isNaN(Date.parse(v));
      },
      message: (props: { value: string }) =>
        `${props.value} is not a valid date!`,
    },
  },
  slots: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    required: true,
    ref: "slot",
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "room",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const bookingModel = model<Tbooking>("booking", bookingSchema);

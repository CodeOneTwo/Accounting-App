/// <reference path="../../typings/tsd.d.ts" />
import * as express from "express";

import {listBookings, createBooking, getBooking, updateBooking, removeBooking} from "../controllers/bookings";

var bookingRoute = express.Router();

bookingRoute.get("/", listBookings)
.post("/", createBooking)
.get("/:bookingId", getBooking)
.put("/:bookingId", updateBooking)
.delete("/:bookingId", removeBooking);

export {bookingRoute};
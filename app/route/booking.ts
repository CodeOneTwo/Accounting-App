/// <reference path="../../typings/tsd.d.ts" />

import {listBookings, createBooking, getBooking, updateBooking, removeBooking} from "../controller/bookings";

var app = express.Router();

app.get("/", listBookings)
.post("/", createBooking)
.get("/:bookingId", getBooking)
.put("/:bookingId", updateBooking)
.delete("/:bookingId", removeBooking);

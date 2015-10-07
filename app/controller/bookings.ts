/// <reference path="../../typings/tsd.d.ts" />

import {Booking} from "../data/Booking";

export function listBookings() {
    var booking = new Booking;
    var bookings = [booking];
    return bookings;
}

export function getBooking() {
    return "asdasd";
}

export function createBooking() {
    var booking = new Booking();
    return "success";
}

export function updateBooking() {
    return "success";
}

export function removeBooking() {
    return "success";
}

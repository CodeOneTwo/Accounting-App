/// <reference path="../../typings/tsd.d.ts" />
import {model, Schema, Document} from "mongoose";

export interface IBooking extends Document {
    receiptNumber: number;
    date: Date;
    debitAccount: string;
    creditAccount: string;
    value: number;
    description: string;
    currency: string;
}

/**
 * BookingSchema
 */
export var BookingSchema = new Schema({
    // Receipt Number
    receiptNumber: { type: Number },
    date: { type: Date },
    debitAccount: { type: Schema.Types.ObjectId },
    creditAccount: { type: Schema.Types.ObjectId }, 
    value: { type: Number },
    description: { type: String },
    currency: { type: String }
});

export var Booking = model<IBooking>("Booking", BookingSchema);
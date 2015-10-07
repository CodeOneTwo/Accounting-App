/// <reference path="../../typings/tsd.d.ts" />
import {model, Schema, Document} from "mongoose";

import {AccountSchema} from "./Account";
import {BookingSchema} from "./Booking";

export interface ICompany extends Document {
    name: string;
    currency: string;
}

/**
 * CompanySchema
 */
var CompanySchema = new Schema({
    // Name
    name: { type: String },
    // Currency
    currency: { type: String },
    // Related Accounts
    accounts: [AccountSchema],
    // Related Bookings
    bookings: [BookingSchema]    
});

export var Company = model<ICompany>("Company", CompanySchema);
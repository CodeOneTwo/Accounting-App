/// <reference path="../../typings/tsd.d.ts" />
import {model, Schema, Document} from "mongoose";

export interface ICompany extends Document {
    name: string;
    currency: string;
}

/**
 * Company
 */
var CompanySchema = new Schema({
    // Name
    name: { type: String },
    // Currency
    currency: { type: String }         
});

export var Company = model<ICompany>("Company", CompanySchema);
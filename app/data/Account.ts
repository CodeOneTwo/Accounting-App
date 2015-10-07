/// <reference path="../../typings/tsd.d.ts" />
import {model, Schema, Document} from "mongoose";

export interface IAccount extends Document {
    name: string;
    accountNumber: number;
	accountType: string;
}

enum accountType {
	ACTIVA,
	PASSIVA
}

/**
 * AccountSchema
 */
export var AccountSchema = new Schema({
    // Name
    name: { type: String },
    // Currency
    accountNumber: { type: Number },
	// Account Type
	accountType: { type: String, enum: accountType }         
});

export var Account = model<IAccount>("Account", AccountSchema);
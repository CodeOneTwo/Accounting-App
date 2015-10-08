/// <reference path="../../typings/tsd.d.ts" />
import {model, Schema, Document} from "mongoose";

interface IUser extends Document {
    name: string;
    password: string;
    admin: boolean;
}

export var UserSchema = new Schema({
    name: String,
    password: String,
    admin: Boolean
});

export var User = model<IUser>("User", UserSchema);

/// <reference path="../../typings/tsd.d.ts" />
import * as express from "express";

var app = express.Router();

app.use("/accounts", accountRoute);

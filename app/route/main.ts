/// <reference path="../../typings/tsd.d.ts" />
import * as express from "express";

import {companyRoute} from "./company";

var app = express.Router();

app.use("/companies", companyRoute);
// app.use("/accounts", accountRoute);

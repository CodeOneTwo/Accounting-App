/// <reference path="../../typings/tsd.d.ts" />
import * as express from "express";

import {companyRoute} from "./company";

var mainRoute = express.Router();

mainRoute.use("/companies", companyRoute);
mainRoute.get("/", function(req, res) {res.send("hallo accounting app")})
// app.use("/accounts", accountRoute);

export {mainRoute};
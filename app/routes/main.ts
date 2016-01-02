/// <reference path="../../typings/tsd.d.ts" />
import * as express from "express";

import {companyRoute} from "./company";

var mainRoute = express.Router();

mainRoute.use("/companies", companyRoute);
mainRoute.get("/", getInfo);
// app.use("/accounts", accountRoute);

function getInfo(req: express.Request, res: express.Response) {
	res.json({
		"version": "0.0.1",
		"authors": "Jan Dietrich, Tobias Bitterli, Dario Maggi"
	});
}
export {mainRoute};
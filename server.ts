/// <reference path="./typings/tsd.d.ts" />

import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import {mainRoute} from "./app/routes/main";

var app = express();

// log TODO: install morgan lib and tsd and uncomment the next line
// app.use(morgan(config.logger.mode));

// makes the body part usable
app.use(bodyParser.json());

// bind the api to the url /app
app.use("/app", mainRoute);

app.listen(3000);

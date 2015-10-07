/// <reference path="../../../typings/tsd.d.ts" />
import * as express from "express";

import {getAllAccounts} from "controller";

var app = express.Router();

app.get("/", getAllAccounts);
app.post("/", addAccount)

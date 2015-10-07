/// <reference path="../../typings/tsd.d.ts" />
import * as express from "express";

import {listAccounts, createAccount, getAccount, updateAccount, removeAccount} from "../controllers/accounts";

var accountRoute = express.Router();

accountRoute.get("/", listAccounts)
.post("/", createAccount)
.get("/:accountId", getAccount)
.put("/:accountId", updateAccount)
.delete("/:accountId", removeAccount);

export {accountRoute};
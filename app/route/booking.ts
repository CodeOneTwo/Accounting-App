/// <reference path="../../typings/tsd.d.ts" />

import {listAccounts, createAccount, getAccount, updateAccount, removeAccount} from "../controller/accounts";

var app = express.Router();

app.get("/", listAccounts)
.post("/", createAccount)
.get("/:accountId", getAccount)
.put("/:accountId", updateAccount)
.delete("/:accountId", removeAccount);

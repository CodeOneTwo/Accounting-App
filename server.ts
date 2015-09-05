/// <reference path="./typings/tsd.d.ts" />

import * as express from "express";
import * as path from "path";

var app = express();

app.get("/app/accounts", getAccounts);
app.post("/app/accounts", addAccount);
app.get("/app/accounts/:account_id", getAccount);
app.put("/app/accounts/:account_id", updateAccount);
app.delete("/app/accounts/:account_id", deleteAccount);

// fake db
var accounts: any[] = [
    { name: "account 1", id: 0 },
    { name: "account 2", id: 1 },
    { name: "account 3", id: 2 }
];

function getAccounts(req: any, res: any) {
    res.json(accounts);
}

function addAccount(req: any, res: any) {
    var index = accounts.length;
    var newAccount = { id: index, name: "account " + index + 1 }
    accounts.push(newAccount);
    res.json(accounts);
}

function getAccount(req: any, res: any) {
    var account = accounts[req.params.account_id];
    res.json(account);
}

function updateAccount(req: any, res: any) {
    
    // todo
    var account = accounts[req.params.account_id]
    res.json(account);
}

function deleteAccount(req: any, res: any) {
    accounts.splice(req.params.account_id, 1);
}

app.listen(3000);
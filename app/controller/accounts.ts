/// <reference path="../../typings/tsd.d.ts" />

import {Account} from "../data/Account";

export function listAccounts() {
    var account = new Account();
    var accounts = [account];
    
    return accounts;
}

export function getAccount() {
    return "asdasd";
}

export function createAccount() {
    var account = new Account();
    return "success";
}

export function updateAccount() {
    return "success";
}

export function removeAccount() {
    return "success";
}

/// <reference path="../../typings/tsd.d.ts" />

import {Company} from "../data/Company";

export function listCompanies() {
    var company = new Company();
    var companies = [company];
    
    return companies;
}

export function getCompany() {
    return "asdasd";
}

export function createCompany() {
    var company = new Company();
    return "success";
}

export function updateCompany() {
    return "success";
}

export function removeCompany() {
    return "success";
}

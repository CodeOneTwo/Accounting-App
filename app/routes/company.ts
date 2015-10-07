/// <reference path="../../typings/tsd.d.ts" />
import * as express from "express";

import {listCompanies, createCompany, getCompany, updateCompany, removeCompany} from "../controller/companies";

var companyRoute = express.Router();

companyRoute.get("/", listCompanies)
.post("/", createCompany)
.get("/:companyId", getCompany)
.put("/:companyId", updateCompany)
.delete("/:companyId", removeCompany);

export {companyRoute};
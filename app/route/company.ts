/// <reference path="../../typings/tsd.d.ts" />

import {listCompanies, createCompany, getCompany, updateCompany, removeCompany} from "../controller/companies";

var app = express.Router();

app.get("/", listCompanies)
.post("/", createCompany)
.get("/:companyId", getCompany)
.put("/:companyId", updateCompany)
.delete("/:companyId", removeCompany);

/// <reference path="../../typings/tsd.d.ts" />

import {Company} from "../data/Company";
import {Request, Response} from "express";

export function listCompanies(req: Request, res: Response) {

    Company.find({})
        .exec((err, companies) => {
            if (err) {
                res.json(err, 400);
            } else {
                res.json(companies);
            }
        });
}

export function getCompany(req: Request, res: Response, next: any) {
    Company.findById(req.params.companyId).exec().then(doc => {
        if (!doc) {
            return res.sendStatus(404);
            } else {
                return res.json(doc);
            }
        }, next);
};


export function createCompany(req: Request, res: Response, next: any) {
    let company = new Company(req.body);

    company.save((err, company) => {
        if (err) return next(err);

        res.json(company);
    });
}

export function updateCompany(req: Request, res: Response, next: any) {
    Company.findByIdAndUpdate(req.params.companyId, req.body, {upsert: true}).exec().then(doc => {
        if (!doc) {
            return res.sendStatus(404);
            } else {
                return res.json(doc);
            }
        }, next);
}

export function removeCompany(req: Request, res: Response, next: any) {
    Company.findByIdAndRemove(req.params.companyId).exec().then(doc => {
        if (!doc) {
            return res.sendStatus(404);
            } else {
                return res.json(doc);
            }
        }, next);
}

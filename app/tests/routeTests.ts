/// <reference path="../../typings/tsd.d.ts" />
import {should, expect} from "chai";
import * as request from "supertest";

import {app} from "../../server";

describe("routeTests", function(){
	it("get info", function(done) {
		request(app)
		.get("/app")
		.expect(200, {
		"version": "0.0.1",
		"authors": "Jan Dietrich, Tobias Bitterli, Dario Knorr"
		}, done);
	});		
});
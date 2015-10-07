/// <reference path="../../typings/tsd.d.ts" />
import {connect} from "mongoose";
import {should, expect} from "chai";
import * as request from "supertest";

import {app} from "../../server";

connect("mongodb://localhost:27017/testing");

describe("dbTest", function(){
	it("get info", function(done) {
		request(app)
		.get("/app")
		.expect(200, {
		"version": "0.0.1",
		"authors": "Jan Dietrich, Tobias Bitterli, Dario Knorr"
		}, done);
	});		
	
	it("simple test", function() {
		expect(0).to.eql(0);
	})
});
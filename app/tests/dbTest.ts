/// <reference path="../../typings/tsd.d.ts" />
import {connect} from "mongoose";
import {should, expect} from "chai";

connect("mongodb://localhost:27017/testing");

describe("dbTest", function(){	
	it("simple test", function() {
		expect().to.eql(0);
	})
});
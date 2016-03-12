/// <reference path="../../typings/tsd.d.ts" />
import {connect} from "mongoose";
import {should, expect} from "chai";

connect("mongodb://localhost:27017/testing");

describe("dbTest", function() {
    it("simple test", function() {
        expect(0).to.eql(0);
    });
});

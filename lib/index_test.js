"use strict";

var _chai = require("chai");

var _cli = require("./cli.js");

describe("greet", function () {
  it("greets a person by name", function () {
    _chai.assert.equal((0, _cli.greet)("lynn"), "hello, lynn");
  });
  it("greets a person flirtatiously if drunk", function () {
    _chai.assert.equal((0, _cli.greet)("lynn --drunk"), "hello lynn, you look sexy today");
  });
});
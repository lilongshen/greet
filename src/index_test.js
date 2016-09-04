import { assert } from "chai";
import { greet } from "./cli.js";

describe("greet", () => {
  it("greets a person by name", () => {
    assert.equal(greet("lynn"), "hello, lynn");
  });
  it("greets a person flirtatiously if drunk", () => {
    assert.equal(greet("lynn --drunk"), "hello lynn, you look sexy today");
  });
});

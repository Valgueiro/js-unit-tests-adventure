import add from "./add.js";
import { module, test } from "qunit";

module("add", function () {
  test("two numbers", (assert) => {
    assert.equal(add(1, 2), 3);
  });
});

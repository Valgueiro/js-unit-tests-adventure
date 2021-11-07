import add from "../add.js";
const { module, test } = QUnit;

module("add", function () {
  test("two numbers", (assert) => {
    assert.equal(add(1, 2), 3);
  });
});

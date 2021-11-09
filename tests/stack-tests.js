import { Stack } from "../stack.js";
const { module, test } = QUnit;


module("Stack Class", function () {
    test("constructor | it should create a empty stack", (assert) => {
        const stack = new Stack();
        assert.equal(stack.length, 0, 'stack starts empty')
    });

    test("push | it should add an item on the stack", (assert) => {
        const stack = new Stack();
        stack.push("item")
        assert.equal(stack.length, 1, 'stack is not empty');
        assert.deepEqual(stack.list, ['item'], 'item was added correctly')
    });

    test("pop | it should remove the last item to enter on the stack", (assert) => {
        const stack = new Stack();
        stack.push("item1")
        stack.push("item2")

        assert.equal(stack.pop(), 'item2', 'the last item to enter was the one popped')
        assert.equal(stack.length, 1, 'item was removed from stack');
    });
});

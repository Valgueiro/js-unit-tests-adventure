import { TodoList, Todo } from "../todo_app/todo.js";
const { module, test } = QUnit;


module("Todo Class", function () {
    test("constructor | it should create a todo with a name", (assert) => {
        const expectedName = 'name of the todo'
        const newTodo = new Todo(expectedName);
        assert.equal(newTodo.name, expectedName, 'name of the created todo is correct')
    });
});


module("TodoList Class", function () {
    test("should start with an empty todo list", (assert) => {
        const todoList = new TodoList();
        assert.deepEqual(todoList.todos, [], 'todos is empty');
    });
});

import { TodoList, Todo } from "../todo_app/todo.js";
const { module, test } = QUnit;


module("Todo Class", function (hooks) {
    test("constructor | it should create a todo with a name", (assert) => {
        const expectedName = 'name of the todo'
        const newTodo = new Todo(expectedName);
        assert.equal(newTodo.name, expectedName, 'name of the created todo is correct')
    });
});


module("TodoList Class", function (hooks) {
    let todoList;

    hooks.beforeEach(() => {
        todoList = new TodoList();
        todoList.SHOULD_USE_LOCAL_STORAGE = false;
        todoList._todos = [];
    })

    test("should start with an empty todo list", (assert) => {
        assert.deepEqual(todoList.todos, [], 'todos is empty');
    });

    test("numberOfTodos | comeca com o valor 1", (assert) => {
        assert.equal(todoList.numberOfTodos, 1, 'numberOfTodos eh 1')
    });

    test.skip("hasTodos | tem que comecar falso", (assert) => {
        assert.ok(todoList.hasTodos, 'hasTodos eh falso')
    });

    test("addTodo | adiciona um todo a lista", (assert) => {
        const newTodo = new Todo('Kapersky');
        todoList.addTodo(newTodo)
        assert.deepEqual(todoList.todos, [newTodo], 'todo foi adicionado');
    });
});


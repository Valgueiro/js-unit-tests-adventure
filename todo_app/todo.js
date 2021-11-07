class TodoList {
    /**
     * @private
     */
    _todos = [];

    // Get information from localStorage
    constructor() {
        let list = [];
        let getLocalStorageData = localStorage.getItem("New Todo");
        if (getLocalStorageData == null) {
            list = [];
        } else {
            list = JSON.parse(getLocalStorageData);
        }

        this._todos = list || [];
    }

    get todos() {
        return this._todos;
    }

    get numberOfTodos() {
        return this._todos.length
    }

    get hasTodos() {
        return this.numberOfTodos > 0;
    }

    addTodo(todo) {
        this._todos.push(todo);
        this._updateLocalStorage();
    }

    removeTodo(index) {
        this._todos.splice(index, 1);
        this._updateLocalStorage();
        return index;
    }

    clearList() {
        this._todos = [];
        this._updateLocalStorage();
    }

    /**
     * @private
     */
    _updateLocalStorage(){
        localStorage.setItem("New Todo", JSON.stringify(this.todos));
    }
}

class Todo {
    constructor(name) {
        this.name = name;
    }
}

export { Todo, TodoList };

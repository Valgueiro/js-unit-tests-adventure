class TodoList {
    /**
     * @private
     */
    _todos = [];

    /**
     * if it should save and get from the localStorage
     */
    SHOULD_USE_LOCAL_STORAGE = true;

    // Get information from localStorage
    constructor() {
        this._todos = this._getInformationFromLocalStorage() || [];
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
    _updateLocalStorage() {
        if (this.SHOULD_USE_LOCAL_STORAGE) {
            localStorage.setItem("New Todo", JSON.stringify(this.todos));
        }
    }

    /**
     * @private
     * @returns {Array<Todo>}
     */
    _getInformationFromLocalStorage() {
        let list = [];
        if (this.SHOULD_USE_LOCAL_STORAGE) {
            const getLocalStorageData = localStorage.getItem("New Todo");
            if (getLocalStorageData == null) {
                list = [];
            } else {
                list = JSON.parse(getLocalStorageData).map((todoItem) => new Todo(todoItem.name));
            }
        }
        return list;
    }
}

class Todo {
    constructor(name) {
        this.name = name;
    }
}

export { Todo, TodoList };

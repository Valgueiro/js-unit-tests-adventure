export class Stack {
    
    constructor() {
        this._list = [];
        this._lastAddedIndex = 0;
    }

    get length() {
        return this._list.length;
    }

    get list(){
        return this._list
    }

    push(item){
        this._list.push(item);
        this._lastAddedIndex++;
    }

    pop(){        
        this._lastAddedIndex--;
        const item = this._list[this._lastAddedIndex];

        //remove from list
        this._list.splice(this._lastAddedIndex, 1);

        return item;
    }
}

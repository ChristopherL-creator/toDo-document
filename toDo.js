class ToDo{

    constructor(name, priority = PRIORITY.Low, tags = []){
        this.name = name;
        this.priority = priority;
        this._creationDate = new Date().getTime();
        this.tags = tags;
    }

    static PRIORITY = {
        Low: 0,
        Medium: 1,
        High: 2,
        Max: 3,
    } 

    get creationDate(){
        return new Date(this._creationDate)
    }
    
    toString(){
        return 'name: ' + this.name + '\n' +
               'prority: ' + this.priority + '\n' +
               'creationDate: ' + this.creationDate + '\n' +
               'tags: ' + this.tags + '\n';
    }

}
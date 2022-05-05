class DeadLineToDo extends ToDo{ 

    constructor(name, deadLine = null, priority = ToDo.PRIORITY.Low, tags = []){ 
        super(name, priority, tags); 
        if (deadLine === null) {
            this._deadLine = this._creationDate + (1000 * 60 * 60 * 24); 
//          const tomorrow = new Date(this._creationDate.getTime()); 
//          tomorrow.setDate(tomorrow.getDate() + 1); 
//          this._deadLine = tomorrow.getTime(); 
        } else {
            this._deadLine = deadLine.getTime();
        }
    } 
    
    set deadLine(newDate){ 
        const timeStamp = newDate.getTime(); 
        this._deadLine = timeStamp;
    }

    get deadLine(){ 
        const date = new Date(this._deadLine); 
        return date;
    }

    toString(){ 
        const toDoString = super.toString() + '\n' + 
                           'Deadline: ' + this.deadLine; 
        return  toDoString;
    } 
} 

//  deadline default deve essere date + 1, mascherata; 

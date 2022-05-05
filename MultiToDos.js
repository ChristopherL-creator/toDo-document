class MultiToDo extends ToDo{

    constructor(name, priority, tags = [] , subToDos = []){ 
        super(name, priority, tags); 
        this.subToDos = subToDos;
    }

    getHighestPriority(){
        if (this.priority === 3) {
            return 3;
        } 

        if (this.priority ) {
            
        }
    }
}
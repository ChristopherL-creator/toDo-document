class deadlineToDo extends toDo{ 
    constructor(name, priority, tags = [], deadline = new Date(2022, 4, 5)){ 
        super(name, priority, tags); 
        this.deadline = deadline;
    }
}
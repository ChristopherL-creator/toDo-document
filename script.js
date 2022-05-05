const todo1 = new ToDo('Uscire', ToDo.PRIORITY.Medium, ['divertimento']) 
//  pre modificare proprietà;
todo1.creationDate = new Date(2022, 6, 22);

console.log(todo1.toString());  

const todo2 = new ToDo('heheh') 
//  pre modificare proprietà;
todo1.creationDate = new Date(2022, 6, 22);

console.log(todo2.toString()); 

const paperino = new DeadLineToDo('manda mail', new Date(2022, 4, 7), ToDo.PRIORITY.High, ['hehe', ' hohoh']); 

console.log(paperino.toString()); 

const paperina = new DeadLineToDo('manda mememel'); 

console.log(paperina.toString());


// console.log(ToDo.fromPriorityToString(3)); 


// const todo2 = new ToDo('Pane', ToDo.PRIORITY.Medium, ['casa'])
// const todo3 = new ToDo('Latte', ToDo.PRIORITY.Low, ['casa'])
// const todo4 = new ToDo('caffè', ToDo.PRIORITY.Max, ['casa'])

// const multi = new MultiToDo('Spesa', ToDo.PRIORITY.Medium, ['casa'], [todo2, todo3, todo4]);

// console.log(multi);
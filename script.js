const todo1 = new ToDo('Uscire', ToDo.PRIORITY.Medium, ['divertimento']) 
todo1.creationDate = new Date(2022, 6, 22);
console.log(todo1.toString());  

const todo2 = new ToDo('heheh') 
//  per modificare proprietà;
todo2.creationDate = new Date(2022, 6, 22);
console.log(todo2.toString()); 

const paperino = new DeadLineToDo('manda mail', new Date(2022, 4, 7), ToDo.PRIORITY.High, ['hehe', ' hohoh']); 
console.log(paperino.toString()); 

const paperina = new DeadLineToDo('manda mememel', new Date(2022, 6, 9), ToDo.PRIORITY.Max, ['uh uh']); 
console.log(paperina.toString()); 

//  metto null perché va rispettato ordine di proprietà; attingerà a valore default;
const topolino = new DeadLineToDo('compra pane', null, ToDo.PRIORITY.Medium, ['casa']);
console.log(topolino.toString()); 

const toDoList = [todo1, todo2, paperino, paperina]; 

function displayToDo() {
    
} 

// const doneList = [];

//  uno degli styles dipende dalla priority (bg-color, in base a priority); 
//  cercare come dare istruzioni stile a file js. 
//  aggiungo style.bgcolor inline a html;
const todo1 = new ToDo('Uscire', ToDo.PRIORITY.Medium, ['tag1']) 
todo1.creationDate = new Date(2022, 6, 22);
console.log(todo1.toString());  

const todo2 = new ToDo('heheh') 
//  per modificare proprietà;
todo2.creationDate = new Date(2022, 6, 22);
console.log(todo2.toString()); 

const paperino = new DeadLineToDo('manda mail', new Date(2022, 4, 7), ToDo.PRIORITY.High, ['tag2', ' tag3']); 
console.log(paperino.toString()); 

const paperina = new DeadLineToDo('manda mememel', new Date(2022, 6, 9), ToDo.PRIORITY.Max, ['tag4']); 
console.log(paperina.toString()); 

//  metto null perché va rispettato ordine di proprietà; attingerà a valore default;
// const topolino = new DeadLineToDo('compra pane', null, ToDo.PRIORITY.Medium, ['tag5']);
// console.log(topolino.toString()); 

const toDoList = [todo1, todo2, paperino, paperina];  



function displayToDo() {
    const container = document.getElementById('todo-container'); 
    for (let i = 0; i < toDoList.length; i++) {
        const task = toDoList[i];
        const divGenerale = document.createElement('div'); 
        divGenerale.classList.add('task-div'); //  (metodo più moderno);          
        const divGriglia = document.createElement('div'); 
        divGriglia.className = "task-griglia"; 
        const titoloContainer = document.createElement('div'); 
        titoloContainer.className = "titolo-container";   
        const titolo = document.createTextNode(task.name); 
        titoloContainer.appendChild(titolo);
        const divFlex = document.createElement('div'); 
        divFlex.className = "task-flex"; 
        for (const tag of task.tags) {
            const divTag = document.createElement('div'); 
            divTag.className = 'tags-items';
            const tagText = document.createTextNode(tag); 
            divTag.appendChild(tagText);
            divFlex.appendChild(divTag);
        } 
        const divButtonContainer = document.createElement('div'); 
        divButtonContainer.className = "button-container";
        const button = document.createElement("INPUT"); 
        button.classList.add('button');
        button.setAttribute("type", "checkbox"); 
        divButtonContainer.appendChild(button);
        const divCreationDate = document.createElement('div'); 
        divCreationDate.className = 'creation-container';
        const cDate = document.createTextNode(task.creationDate.toISOString()); 
        divCreationDate.appendChild(cDate); 
        if (task.deadLine) {
               const divDeadLine = document.createElement('div'); 
               const dDate = document.createTextNode(task.deadLine.toISOString()); 
               divDeadLine.className = "deadline-container"; 
               divDeadLine.appendChild(dDate);  
               divGriglia.appendChild(divDeadLine); 
        }
        divGriglia.appendChild(titoloContainer); 
        divGriglia.appendChild(divFlex); 
        divGriglia.appendChild(divButtonContainer); 
        divGriglia.appendChild(divCreationDate); 
        divGenerale.appendChild(divGriglia); 
        container.appendChild(divGenerale);
    }
} 


displayToDo(toDoList); 

// function changeColor(divGenerale, button) {
    // if (task.button.checked) {
    //   task.divGenerale.style.backgroundColor = '#00FF00';
    // } else {
    //   task.divGenerale.style.backgroundColor = '#FF0000';
    // }
//   }

// const doneList = [];

//  uno degli styles dipende dalla priority (bg-color, in base a priority); 
//  cercare come dare istruzioni stile a file js. 
//  aggiungo style.bgcolor inline a html;
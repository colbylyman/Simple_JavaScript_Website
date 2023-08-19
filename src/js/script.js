

class Task {
    constructor({ text, date, done, id }) {
        this.text = fixString(text)
        this.date = date
        this.done = done
        this.id = id

    }
    toHTML() {

        if (this.done == 'false') {
            return `
            <li class="list-group-item">
            <img src="images/check_box_outline_blank-24px.svg" id="checkBox" onclick="updateTask(${ this.id });">
            <span> ${ this.text } </span>
            <button type="button" class="right_align"><img src="images/delete-24px.svg" onclick="deleteTask(${ this.id });"></button>
            <span class= right_align> ${ this.prettyDate() } &nbsp;</span>
            </li>
        `
        }

        // Return strike though text if task is marked as completed
        else {
            return `
            <li class="list-group-item">
            <img src="images/check_box-24px.svg" id="checkBox" onclick="updateTask(${ this.id });">
            <span class="completedTask"> ${ this.text } </span>
            <button type="button" class="right_align"><img src="images/delete-24px.svg" onclick="deleteTask(${ this.id });"></button>
            <span class= right_align> ${ this.prettyDate() } &nbsp;</span>
            </li>
        `
        }
        
       
    }
    prettyDate() {
        console.log(this.date);
        var month = this.date.substring(5, 7);
        var day = this.date.substring(8, 10);
        var year = this.date.substring(0, 4);
        return `${ month } / ${ day } / ${ year }`
    }

    toggle() {
        if (this.done == `true`) {
            this.done = `false`;
        }
        else {
            this.done = `true`;
        }
        return;
    }
}

let tasks = []

tasks = this.readStorage();
this.readTasks();

document.getElementById('inputText').value = localStorage.getItem('inputBoxText'); 
var date = localStorage.getItem('inputBoxDate');
document.getElementById('inputDate').value = date; 

// removeItem()
function updateStorage(newData) {
    let jsonString = JSON.stringify(newData);
    localStorage.setItem('database', jsonString);
    return;
}

function readStorage() {
    let jsonString = localStorage.getItem('database');
    let result = JSON.parse(jsonString) || [];
    result = result.map(taskData => new Task(taskData))
    return result;
}


function createTask() {
    // Collects input from the forum and saves it into the Local Storage, then call the readTasks function

    let inputTask = document.getElementById('inputText').value;
    let inputDate = document.getElementById('inputDate').value;

    var newListItem = new Task({text: inputTask, date: inputDate, done: 'false', id: Date.now()});

    tasks = this.readStorage();

    tasks.push(newListItem);

    localStorage.removeItem('inputBoxText');
    localStorage.removeItem('inputBoxDate');
    this.updateStorage(tasks);  
    this.readTasks();

    return;
}

function readTasks() {
    // Resets the DOM and prints out the current Local Storage for tasks
    var list = document.getElementById('toDoList');
    list.innerHTML = ''; 

    tasks = this.readStorage();

    for (var i = 0; i < tasks.length; i++) {
        list.innerHTML += tasks[i].toHTML();        
    }
    return;
}


function updateTask(id) {    
    // Find the task with matching id and toggles the 'done' marker
    for(var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks[i].toggle();
        }
    }

    this.updateStorage(tasks);
    this.readTasks();
    return;  
}


function deleteTask(id) {
    // Finds the task with matching id a removes it
    for(var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks.splice(i, 1);
        }
    }

    this.updateStorage(tasks);
    this.readTasks();
    return;
}

function compareDates(a, b) {
    if (a.date > b.date) {
        return 1;
    }
    else if (a.date < b.date) {
        return -1;
    }
    return 0;
  }

var sortedDate = false;

function sortByDate() {
    var tempTasks = tasks;
    console.log('Sort: ', tempTasks.sort(compareDates));
    if (sortedDate == true) {
        this.readTasks();
        sortedDate = false;
    }
    else {
        var list = document.getElementById('toDoList');
        list.innerHTML = ''; 

        for (var i = 0; i < tempTasks.length; i++) {
            list.innerHTML += tempTasks[i].toHTML();        
        }
        sortedDate = true;
    }
    if (sortedCompletion == true) {
        sortedCompletion = false;
        this.sortByCompletion();
    }
    return;
}

var sortedCompletion = false;

function compareCompletion(a, b) {
    if (a.done > b.done) {
        return 1;
    }
    else if (a.done < b.done) {
        return -1;
    }
    return 0;
  }

function sortByCompletion() {
    var tempTasks = tasks;
    //console.log('Sort: ', tempTasks.sort(compareCompletion));
    if (sortedCompletion == true) {
        this.readTasks();
        sortedCompletion = false;
    }
    else {
        var list = document.getElementById('toDoList');
        list.innerHTML = ''; 

        for (var i = 0; i < tempTasks.length; i++) {
            if (tempTasks[i].done == 'false') {
                list.innerHTML += tempTasks[i].toHTML();   
            }
        }
        sortedCompletion = true;
    }
    return;
}

function fixString(string) {
    const map = {
        //'&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        //'"': '&quot;',
        //"'": '&#x27;',
        //"/": '&#x2F;',
    };
    const reg = /[<>]/ig;
    //const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
}


function saveInputText() {
    //console.log('Saving Input Text');
    var saveText = document.getElementById('inputText').value;
    localStorage.setItem('inputBoxText', saveText);
    console.log('Current Text: ' + localStorage.getItem('inputBoxText'));
    return;
}

function saveInputDate() {
    //console.log('Saving Input Date');
    var saveDate = document.getElementById('inputDate').value;
    localStorage.setItem('inputBoxDate', saveDate);
    console.log('Current Date: ' + saveDate);
    return;
}

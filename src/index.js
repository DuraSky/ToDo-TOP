const content = document.getElementById("content");
const projectNameForm = document.getElementById("projectName");
const subButton = document.getElementById("submit");

let allProjects = [];


class Project {
    constructor(projectName){
        this.projectName = projectName;
        this.task = {}
    }

    addTask(newTask){
        this.task = newTask;
    }
}

class Task {
    constructor(priority){
        this.priority = priority;
    }
}


subButton.addEventListener("click", ()=>{
    const projectNameDiv = document.createElement("div");
    projectNameDiv.setAttribute("id", "projectNameDiv");

    const theNameIs = projectNameForm.value;
    console.log(theNameIs);
    let createNewProject = new Project(theNameIs);
    allProjects.push(createNewProject);
    projectNameDiv.innerHTML = theNameIs;

    const addTask = document.createElement("input");
    addTask.setAttribute("type", "text");
    addTask.setAttribute("name", "setProperty");
    addTask.setAttribute("id", "setProperty");
    const addLabel = document.createElement("label");
    addLabel.setAttribute("for", "setProperty");
    addLabel.innerHTML = "Add Task";
    const addButton = document.createElement("button");
    addButton.innerHTML = "add"

     addButton.addEventListener("click", ()=>{
         const taskValue = addTask.value;
         console.log(taskValue)

        let createTask = new Task(taskValue);
        createNewProject.addTask(createTask)
         console.log(...allProjects)
     })

    content.appendChild(projectNameDiv);
    projectNameDiv.appendChild(addLabel);
    projectNameDiv.appendChild(addTask);
    projectNameDiv.appendChild(addButton);
    

    projectNameForm.value = "";
    console.log(createNewProject);

});

//console.log(propertyValue)










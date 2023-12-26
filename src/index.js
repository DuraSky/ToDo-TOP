import { Project } from "./constructor";

const content = document.getElementById("content");
const projectNameForm = document.getElementById("projectName");
const subButton = document.getElementById("submit");

let allProjects = [];


subButton.addEventListener("click", ()=>{

    const projectNameDiv = document.createElement("div");
    projectNameDiv.setAttribute("id", "projectNameDiv");
    const theNameIs = projectNameForm.value;
    let createNewProject = new Project(theNameIs);
    allProjects.push(createNewProject);
    projectNameDiv.innerHTML = theNameIs;

    const addTaskForm = document.createElement("input");
    addTaskForm.setAttribute("type", "text");
    addTaskForm.setAttribute("name", "setProperty");
    addTaskForm.setAttribute("id", "setProperty");

    const addLabel = document.createElement("label");
    addLabel.setAttribute("for", "setProperty");
    addLabel.innerHTML = "Add Task";

    const addPrioForm = document.createElement("select");  
    addPrioForm.setAttribute("name", "setPrio");
    addPrioForm.setAttribute("id", "setPrio");

    const optionsHigh = document.createElement("option");
    optionsHigh.setAttribute("value", "high");
    const optionsTextHigh = document.createTextNode("High");

    const optionsMed = document.createElement("option");
    optionsMed.setAttribute("value", "medium");
    const optionsTextMed = document.createTextNode("Medium");

    const optionsLow = document.createElement("option");
    optionsLow.setAttribute("value", "low");
    const optionsTextLow = document.createTextNode("Low");



    optionsHigh.appendChild(optionsTextHigh);
    optionsMed.appendChild(optionsTextMed);
    optionsLow.appendChild(optionsTextLow);
    addPrioForm.appendChild(optionsHigh);
    addPrioForm.appendChild(optionsMed);
    addPrioForm.appendChild(optionsLow);

    const addLabelPrio = document.createElement("label");
    addLabelPrio.setAttribute("for", "setPrio");
    addLabelPrio.innerHTML = "Add Priority";

   const addButton = document.createElement("button");
    addButton.innerHTML = "add"
    

     addButton.addEventListener("click", ()=>{
        const taskValue = addTaskForm.value;
        const prioValue = addPrioForm.value;

        let newTask = { description: taskValue, priority: prioValue };
        createNewProject.addTask(newTask)
        console.log(createNewProject)
        addTaskForm.value = "";
     })

    content.appendChild(projectNameDiv);
    projectNameDiv.appendChild(addLabel);
    projectNameDiv.appendChild(addTaskForm);
    projectNameDiv.appendChild(addLabelPrio);
    projectNameDiv.appendChild(addPrioForm);
    projectNameDiv.appendChild(addButton);
    

    projectNameForm.value = "";
    console.log(createNewProject);

});












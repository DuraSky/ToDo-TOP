import { Project } from "./constructor";
import { createTask } from "./tasks";
import { taskDiv } from "./tasks";

const content = document.getElementById("content");
const projectNameForm = document.getElementById("projectName");
const subButton = document.getElementById("submit");

let allProjects = [];


subButton.addEventListener("click", ()=>{
    
    //DOM for adding projects
    const projectNameDiv = document.createElement("div");
    projectNameDiv.setAttribute("id", "projectNameDiv");
    const theNameIs = projectNameForm.value;
    let createNewProject = new Project(theNameIs);
    allProjects.push(createNewProject);
    projectNameDiv.innerHTML = theNameIs;

    createTask(createNewProject);
    

    content.appendChild(projectNameDiv);
    projectNameDiv.appendChild(taskDiv);
    

    projectNameForm.value = "";
    console.log(createNewProject);

});












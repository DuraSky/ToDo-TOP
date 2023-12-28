import { Project } from "./constructor";
import { createTask } from "./tasks";

const content = document.getElementById("content");
const projectNameForm = document.getElementById("projectName");
const subButton = document.getElementById("submit");

let allProjects = [];


subButton.addEventListener("click", ()=>{
    
    //DOM for adding projects
    const projectNameDiv = document.createElement("div");
    projectNameDiv.setAttribute("id", "projectNameDiv");
    const projectH3 = document.createElement("h3");
    const theNameIs = projectNameForm.value;
    let createNewProject = new Project(theNameIs);
    allProjects.push(createNewProject);
    projectH3.innerHTML = `Project name is: ${theNameIs}`;

    const taskDiv = createTask(createNewProject);

    content.appendChild(projectNameDiv);
    projectNameDiv.appendChild(projectH3)
    projectNameDiv.appendChild(taskDiv);
    
    projectNameForm.value = "";
    console.log(createNewProject);
});

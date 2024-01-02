import { Project } from "./constructor";
import { createTask } from "./tasks";

const content = document.getElementById("content");
const projectNameForm = document.getElementById("projectName");
const subButton = document.getElementById("submit");


subButton.addEventListener("click", ()=>{
    //DOM for adding projects
    const projectNameDiv = document.createElement("div");
    projectNameDiv.setAttribute("id", "projectNameDiv");
    const projectH3 = document.createElement("h3");
    let theNameIs = projectNameForm.value;
    let createNewProject = new Project(theNameIs);


    projectH3.innerHTML = `Project name is: ${theNameIs}`;

    const taskDiv = createTask(createNewProject);

    const removeProjectBtn = document.createElement("button");
    removeProjectBtn.innerHTML = "Delete Project";   

    const editProjectBtn = document.createElement("button");
    editProjectBtn.innerHTML = "Edit Project";

    content.appendChild(projectNameDiv);
    projectNameDiv.appendChild(projectH3);
    projectH3.appendChild(removeProjectBtn);
    projectH3.appendChild(editProjectBtn);
    projectNameDiv.appendChild(taskDiv);

    removeProjectBtn.addEventListener("click",()=>{
        content.removeChild(projectNameDiv);
    })

    editProjectBtn.addEventListener("click", ()=>{
        let newNameIs = prompt("enter new project name:");
        console.log(newNameIs);
        theNameIs = newNameIs;
        createNewProject.projectName = theNameIs;

        projectH3.innerHTML = `Project name is: ${theNameIs}`;

        projectH3.appendChild(removeProjectBtn);
        projectH3.appendChild(editProjectBtn);
    })
    
    projectNameForm.value = "";
    console.log(createNewProject);
});





import { Project } from "./constructor";
import { createTask } from "./tasks";
import { storeProject, deleteProject, updateProjectName, getProjectsFromStorage} from "./storage";
import { displayProjectFromStorage } from "./display";


const content = document.getElementById("content");
const projectNameForm = document.getElementById("projectName");
const subButton = document.getElementById("submit");

window.onload = function () {
    const storedProjects = getProjectsFromStorage();
    storedProjects.forEach((storedProject) => {
        displayProject(storedProject);
    });
};

subButton.addEventListener("click", ()=>{
    //DOM for adding projects
    const projectNameDiv = document.createElement("div");
    projectNameDiv.setAttribute("id", "projectNameDiv");
    const projectHeadlineDiv = document.createElement('div');
    projectHeadlineDiv.setAttribute("id", "projectHeadline");
    const projectH3 = document.createElement("h3");
    let theNameIs = projectNameForm.value;
    let createNewProject = new Project(theNameIs);

    if(storeProject(createNewProject) ===false ){
        content.appendChild(projectNameDiv);
        let existingProjects = JSON.parse(localStorage.getItem("Projects")) || [];        
    };

    //projectH3.innerHTML = `Project name: ${theNameIs}`;
    projectH3.innerHTML = `Project name: ` + displayProjectFromStorage(theNameIs);


    const taskDiv = createTask(createNewProject);

    const removeProjectBtn = document.createElement("button");
    removeProjectBtn.innerHTML = "Delete Project";   

    const editProjectBtn = document.createElement("button");
    editProjectBtn.innerHTML = "Edit Project";

   

    projectNameDiv.appendChild(projectHeadlineDiv);
    projectHeadlineDiv.appendChild(projectH3)
    projectHeadlineDiv.appendChild(removeProjectBtn);
    projectHeadlineDiv.appendChild(editProjectBtn);
    projectNameDiv.appendChild(taskDiv);

    removeProjectBtn.addEventListener("click",()=>{
        content.removeChild(projectNameDiv);
        deleteProject(createNewProject)
    })

    editProjectBtn.addEventListener("click", ()=>{
        let newNameIs = prompt("enter new project name:");
        updateProjectName(createNewProject, newNameIs)
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


//Duplicate code to show default project on page load
// window.onload = function(){
//     const defaultProject = new Project("Default Project");
//     displayProject(defaultProject);
// }

// function displayProject(project) {
//     const projectNameDiv = document.createElement("div");
//     projectNameDiv.setAttribute("id", "projectNameDiv");
//     const projectHeadlineDiv = document.createElement('div');
//     projectHeadlineDiv.setAttribute("id", "projectHeadline");
//     const projectH3 = document.createElement("h3");
//     projectH3.innerHTML = `Project name is: ${project.projectName}`;

//     const taskDiv = createTask(project);

//     const removeProjectBtn = document.createElement("button");
//     removeProjectBtn.innerHTML = "Delete Project";   

//     const editProjectBtn = document.createElement("button");
//     editProjectBtn.innerHTML = "Edit Project";

    
//     content.appendChild(projectNameDiv);
//     projectNameDiv.appendChild(projectHeadlineDiv);
//     projectHeadlineDiv.appendChild(projectH3)
//     //projectNameDiv.appendChild(projectH3);
//     projectHeadlineDiv.appendChild(removeProjectBtn);
//     projectHeadlineDiv.appendChild(editProjectBtn);
//     projectNameDiv.appendChild(taskDiv);

//     removeProjectBtn.addEventListener("click", () => {
//         content.removeChild(projectNameDiv);
//     });

//     editProjectBtn.addEventListener("click", () => {
//         let newNameIs = prompt("Enter new project name:");
//         console.log(newNameIs);
//         project.projectName = newNameIs;
//         projectH3.innerHTML = `Project name is: ${newNameIs}`;
//         projectH3.appendChild(removeProjectBtn);
//         projectH3.appendChild(editProjectBtn);
//     });
// }


function displayProject(project) {
    const projectNameDiv = document.createElement("div");
    projectNameDiv.setAttribute("id", "projectNameDiv");
    const projectHeadlineDiv = document.createElement('div');
    projectHeadlineDiv.setAttribute("id", "projectHeadline");
    const projectH3 = document.createElement("h3");

    // Display project name from storage
    projectH3.innerHTML = `Project name: ${displayProjectFromStorage(project.projectName)}`;

    const taskDiv = createTask(project);

    const removeProjectBtn = document.createElement("button");
    removeProjectBtn.innerHTML = "Delete Project";

    const editProjectBtn = document.createElement("button");
    editProjectBtn.innerHTML = "Edit Project";

    projectNameDiv.appendChild(projectHeadlineDiv);
    projectHeadlineDiv.appendChild(projectH3);
    projectHeadlineDiv.appendChild(removeProjectBtn);
    projectHeadlineDiv.appendChild(editProjectBtn);
    projectNameDiv.appendChild(taskDiv);

    removeProjectBtn.addEventListener("click", () => {
        content.removeChild(projectNameDiv);
        deleteProject(project);
    });

    editProjectBtn.addEventListener("click", () => {
        let newNameIs = prompt("Enter new project name:");
        updateProjectName(project, newNameIs);

        // Update the displayed project name
        projectH3.innerHTML = `Project name: ${displayProjectFromStorage(newNameIs)}`;
    });

    content.appendChild(projectNameDiv);
}




import { Project } from "./constructor";
import { createTask } from "./tasks";
import { storeProject, deleteProject, updateProjectName, getProjectsFromStorage, setDefaultProject} from "./storage";
import { displayProjectFromStorage } from "./display";
import { addCompleteButton, addDeleteButton, addEditButton } from "./buttons";
import "./style.css"

const content = document.getElementById("content");
const projectNameForm = document.getElementById("projectName");
const subButton = document.getElementById("submit");


window.onload =  function () {
    let defaultProject = new Project("Default Project")
    setDefaultProject(defaultProject);
    const storedProjects =  getProjectsFromStorage();

    storedProjects.forEach((storedProject) => {
        const projectInstance = new Project(storedProject.projectName);

        storedProject.task.forEach((task)=>{
            projectInstance.addTask({
                description: task.description,
                priority: task.priority,
                dueDate: task.dueDate,
                completed: task.completed,
                id: task.id +100,
            })   
        });
        console.log("after tasks")
        console.log(projectInstance)
        displayProject(projectInstance);

    });
}

subButton.addEventListener("click", ()=>{
    //DOM for adding projects
    const projectNameDiv = document.createElement("div");
    projectNameDiv.classList.add("projectNameDiv");
    const projectHeadlineDiv = document.createElement('div');
    projectHeadlineDiv.setAttribute("id", "projectHeadline");
    const projectButtonsDiv = document.createElement("div");
    projectButtonsDiv.classList.add("projectButtons")
    const projectH3 = document.createElement("h3");
    let theNameIs = projectNameForm.value;
    let createNewProject = new Project(theNameIs);

    if(storeProject(createNewProject) ===false ){
        content.appendChild(projectNameDiv);
        let existingProjects = JSON.parse(localStorage.getItem("Projects")) || [];        
    };

    projectH3.innerHTML = `Project name: ` + displayProjectFromStorage(theNameIs);

    const taskDiv = createTask(createNewProject);

    const removeProjectBtn = document.createElement("button");
    removeProjectBtn.innerHTML = "Delete Project";   

    const editProjectBtn = document.createElement("button");
    editProjectBtn.innerHTML = "Edit Project";

    projectNameDiv.appendChild(projectHeadlineDiv);
    projectHeadlineDiv.appendChild(projectH3)
    projectHeadlineDiv.appendChild(projectButtonsDiv)
    projectButtonsDiv.appendChild(removeProjectBtn);
    projectButtonsDiv.appendChild(editProjectBtn);
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
        projectHeadlineDiv.appendChild(projectButtonsDiv)

    })   
    projectNameForm.value = "";
    console.log(createNewProject);
});



function displayProject(projectInstance) {
    console.log("here")
    console.log(projectInstance)
    const projectNameDiv = document.createElement("div");
    projectNameDiv.classList.add("projectNameDiv");
    const projectHeadlineDiv = document.createElement('div');
    projectHeadlineDiv.setAttribute("id", "projectHeadline");
    const projectButtonsDiv = document.createElement("div");
    projectButtonsDiv.classList.add("projectButtons");
    const projectH3 = document.createElement("h3");

    // Display project name from storage
    projectH3.innerHTML = `Project name: ${displayProjectFromStorage(projectInstance.projectName)}`;

    const taskDiv = createTask(projectInstance);

    const removeProjectBtn = document.createElement("button");
    removeProjectBtn.innerHTML = "Delete Project";

    const editProjectBtn = document.createElement("button");
    editProjectBtn.innerHTML = "Edit Project";

    projectNameDiv.appendChild(projectHeadlineDiv);
    projectHeadlineDiv.appendChild(projectH3);
    projectHeadlineDiv.appendChild(projectButtonsDiv)
    projectButtonsDiv.appendChild(removeProjectBtn);
    projectButtonsDiv.appendChild(editProjectBtn);
    projectNameDiv.appendChild(taskDiv);

    projectInstance.task.forEach((task) => {
        const taskButtonDiv = document.createElement("div");
        taskButtonDiv.classList.add("taskButtonDiv");
        const currentTasksDiv = document.createElement("div");
        currentTasksDiv.classList.add("currentTasks");
        currentTasksDiv.setAttribute("data-id", task.id);
        const getTaskDivId = currentTasksDiv.dataset.id;
        const isTaskCompleted = task.completed;

        if(isTaskCompleted === true){
            console.log('yea this is done')
            currentTasksDiv.classList.add("complete")
        }
        
        currentTasksDiv.innerHTML = `
            <div class="taskParaDiv"><p>Task name: <b>${task.description}</b></p>
            <p>Priority: <b>${task.priority}</b></p>
            <p>It is due till: <b>${task.dueDate}</b></p></div>`;
                
        const completeButton = addCompleteButton(projectInstance,getTaskDivId, currentTasksDiv);
        const deleteButton = addDeleteButton(projectInstance, getTaskDivId, currentTasksDiv, taskDiv);
        const editButton = addEditButton(projectInstance, getTaskDivId, currentTasksDiv, isTaskCompleted, taskDiv);

        taskDiv.appendChild(currentTasksDiv);
        currentTasksDiv.appendChild(taskButtonDiv);
        taskButtonDiv.appendChild(completeButton);
        taskButtonDiv.appendChild(editButton);
        taskButtonDiv.appendChild(deleteButton);
    });

    removeProjectBtn.addEventListener("click", () => {
        content.removeChild(projectNameDiv);
        deleteProject(projectInstance);
    });

    editProjectBtn.addEventListener("click", () => {
        let newNameIs = prompt("Enter new project name:");
        updateProjectName(projectInstance, newNameIs);

        // Update the displayed project name
        projectH3.innerHTML = `Project name: ${displayProjectFromStorage(newNameIs)}`;
    });
    content.appendChild(projectNameDiv);
}




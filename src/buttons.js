 import { deleteTask, updateTaskName } from "./storage";
 import { getProjectsFromStorage, markAsCompleted } from "./storage";
 
 export function addCompleteButton(createNewProject,getTaskDivId, currentTasksDiv, isTaskCompleted){
    const pullProjects = getProjectsFromStorage();

    const completeButton = document.createElement("button");
    completeButton.innerHTML= "Mark as complete";

     completeButton.addEventListener("click", ( )=>{
         for (let i = 0; i < createNewProject.task.length; i++){
             if(createNewProject.task[i].id == getTaskDivId){ 
                 if(createNewProject.task[i].completed == true){
                    const value = false;
                     markAsCompleted(createNewProject.task[i],createNewProject, value, currentTasksDiv)
                     createNewProject.task[i].completed = false;
                     currentTasksDiv.classList.remove("complete")
                     break;
                 }if(createNewProject.task[i].completed == false){
                    const value = true;
                     markAsCompleted(createNewProject.task[i],createNewProject, value, currentTasksDiv )
                     createNewProject.task[i].completed = true;
                     currentTasksDiv.classList.add("complete")
                    break;
                 }
             }
         }
     })
     return(completeButton);

}

export function addDeleteButton (createNewProject, getTaskDivId, currentTasksDiv, taskDiv){
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add("deleteTask");
    deleteTaskButton.innerHTML = "Delete Task";

    deleteTaskButton.addEventListener("click", ()=>{
        for (let i = 0; i < createNewProject.task.length; i++){
            if(createNewProject.task[i].id == getTaskDivId){
                deleteTask(createNewProject.task[i], createNewProject)
                createNewProject.task.splice(i,1);  
                
                
                currentTasksDiv.innerHTML = 
                `Task name: ${createNewProject.getDescription()[i]},
                 priority: ${createNewProject.getPrio()[i]},
                 it is due till ${createNewProject.getDueDate()[i]}`;
            }
        }
        taskDiv.removeChild(currentTasksDiv);
    });

    return deleteTaskButton;
}

export function addEditButton(createNewProject, getTaskDivId, currentTasksDiv, isTaskCompleted, taskDiv){
    const editTaskButton = document.createElement("button");
    editTaskButton.innerHTML = "Edit Name";

    editTaskButton.addEventListener("click", ()=>{
        let editTaskName = prompt("New Task name:");

        for (let i = 0; i < createNewProject.task.length; i++){
            if(createNewProject.task[i].id == getTaskDivId){
                updateTaskName(createNewProject.task[i],createNewProject,editTaskName);
                createNewProject.task[i].description = editTaskName;

                currentTasksDiv.innerHTML = 
                `Task name: ${createNewProject.getDescription()[i]},
                 priority: ${createNewProject.getPrio()[i]},
                 it is due till ${createNewProject.getDueDate()[i]}`;    
            }
        }


    console.log(createNewProject);
    currentTasksDiv.appendChild(addCompleteButton(createNewProject, getTaskDivId, currentTasksDiv, isTaskCompleted));
    currentTasksDiv.appendChild(addDeleteButton(createNewProject, getTaskDivId, currentTasksDiv, taskDiv));
    currentTasksDiv.appendChild(addEditButton(createNewProject, getTaskDivId, currentTasksDiv, isTaskCompleted, taskDiv));  
    
    });
    return editTaskButton;
}


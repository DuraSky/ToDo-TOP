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
                
            }
        }
        taskDiv.removeChild(currentTasksDiv);
    });

    return deleteTaskButton;
}

export function addEditButton(createNewProject, getTaskDivId, currentTasksDiv, isTaskCompleted, taskDiv, taskButtonDiv){
    const editTaskButton = document.createElement("button");
    editTaskButton.innerHTML = "Edit Name";

    editTaskButton.addEventListener("click", ()=>{
        let editTaskName = prompt("New Task name:");

        for (let i = 0; i < createNewProject.task.length; i++){
            if(createNewProject.task[i].id == getTaskDivId){
                updateTaskName(createNewProject.task[i],createNewProject,editTaskName);
                createNewProject.task[i].description = editTaskName;

                currentTasksDiv.innerHTML = 
                `<div class="taskParaDiv"><p>Task name: <b>${createNewProject.getDescription()[i]}</b></p>
                <p>priority: <b>${createNewProject.getPrio()[i]}</b></p>
                <p>it is due till <b>${createNewProject.getDueDate()[i]}</b></p></div>`;    
            }
        }


    console.log(createNewProject);
    currentTasksDiv.appendChild(taskButtonDiv);


    });
    return editTaskButton;
}


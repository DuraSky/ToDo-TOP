 import { deleteTask } from "./storage";
 
 export function addCompleteButton(createNewProject,getTaskDivId, currentTasksDiv){
 //Marking as complete
        const completeButton = document.createElement("button");
        completeButton.innerHTML= "Mark as complete";

        completeButton.addEventListener("click", ( )=>{
            for (let i = 0; i < createNewProject.task.length; i++){
                if(createNewProject.task[i].id == getTaskDivId){ 
                    if(currentTasksDiv.classList.contains("complete")){
                        currentTasksDiv.classList.remove("complete")
                    }else{
                        currentTasksDiv.classList.add("complete")
                    }
                }
            }
        })
        return(completeButton)
}


// export function addDeleteButton(createNewProject, getTaskDivId, currentTasksDiv){
//             //Deleting Tasks
//             const deleteTaskButton = document.createElement("button");
//             deleteTaskButton.classList.add("deleteTask");
//             deleteTaskButton.innerHTML = "Delete Task";
    
//             deleteTaskButton.addEventListener("click", ()=>{
//                 for (let i = 0; i < createNewProject.task.length; i++){
//                     if(createNewProject.task[i].id == getTaskDivId){
//                         deleteTask(createNewProject.task[i], createNewProject)
//                         createNewProject.task.splice(i,1);  
                        
                        
//                         currentTasksDiv.innerHTML = 
//                         `Task name: ${createNewProject.getDescription()[i]},
//                          priority: ${createNewProject.getPrio()[i]},
//                          it is due till ${createNewProject.getDueDate()[i]}`;
//                     }
//                 }
//                 taskDiv.removeChild(currentTasksDiv); 
//             });
//             return(deleteTaskButton)

// }


import { storeTasks, deleteTask, updateTaskName } from "./storage";
import { addCompleteButton, addDeleteButton, addEditButton } from "./buttons";

export function createTask(createNewProject){
    let dataCounter = 0;
    let taskCounter = 0;

    const taskDiv = document.createElement("div");
    
    //DOM for adding Tasks into Projects
    const addTaskForm = document.createElement("input");
    addTaskForm.setAttribute("type", "text");
    addTaskForm.setAttribute("name", "setProperty");
    addTaskForm.setAttribute("id", "setProperty");
    
    const addLabel = document.createElement("label");
    addLabel.setAttribute("for", "setProperty");
    addLabel.innerHTML = "Task Name:";
    
    taskDiv.classList.add("taskDiv");
    
    //DOM for adding priority on Tasks
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
    
    //DOM for adding due date on tasks
    const addTaskDueDateForm = document.createElement("input");
    addTaskDueDateForm.setAttribute("type", "date");
    addTaskDueDateForm.setAttribute("name", "taskDueDate");
    addTaskDueDateForm.setAttribute("id", "taskDueDate");
    addTaskDueDateForm.setAttribute("required", "")
    
    const addTaskDueDateLabel = document.createElement("label");
    addTaskDueDateLabel.setAttribute("for", "taskDueDate");
    addTaskDueDateLabel.innerHTML = "Due: ";
    
    //DOM for adding button to add Tasks
    const addButton = document.createElement("button");
    addButton.innerHTML = "add"

    //DOM for adding tasks options into a div
    const taskOptionsDiv = document.createElement("div");
    taskOptionsDiv.classList.add("taskOptions")      

    console.log("in tasks")
    console.log(createNewProject)
        
    //Tasks being added to array
    addButton.addEventListener("click", ()=>{
        const taskValue = addTaskForm.value;
        const prioValue = addPrioForm.value;
        const dueDateValue = addTaskDueDateForm.value;

        let isTaskCompleted = false;

        if(taskValue==""||prioValue==""||dueDateValue==""){
        return alert("Fill out all the fields")
        }
    
         createNewProject.addTask({ 
            description: taskValue,
            priority: prioValue,
            dueDate: dueDateValue,
            completed:isTaskCompleted,
            id: dataCounter++,
        });
        taskCounter++;
        storeTasks(createNewProject.task, createNewProject);

        //DOM for displaying tasks
        const currentTasksDiv = document.createElement("div");
        currentTasksDiv.classList.add("currentTasks");
        currentTasksDiv.setAttribute("data-id", taskCounter -1);
            
        addTaskForm.value = "";
        console.log(createNewProject);

        const getTaskDivId = currentTasksDiv.dataset.id;

        console.log(getTaskDivId + "for currenttaskDiv")
        currentTasksDiv.innerHTML = 
            `Task name: ${createNewProject.getDescription()[createNewProject.task.length -1]},
             priority: ${createNewProject.getPrio()[createNewProject.task.length -1]},
             it is due till ${createNewProject.getDueDate()[createNewProject.task.length -1]}`;

        const completeButton = addCompleteButton(createNewProject, getTaskDivId, currentTasksDiv, isTaskCompleted);

        const deleteButton = addDeleteButton(createNewProject, getTaskDivId, currentTasksDiv, taskDiv)

        const editButton = addEditButton(createNewProject, getTaskDivId, currentTasksDiv, isTaskCompleted, taskDiv);

        taskDiv.appendChild(currentTasksDiv);
        currentTasksDiv.appendChild(completeButton);
        currentTasksDiv.appendChild(editButton);
        currentTasksDiv.appendChild(deleteButton);
})
 
    taskOptionsDiv.appendChild(addLabel);
    taskOptionsDiv.appendChild(addTaskForm);
    taskOptionsDiv.appendChild(addLabelPrio);
    taskOptionsDiv.appendChild(addPrioForm);
    taskOptionsDiv.appendChild(addTaskDueDateLabel);
    taskOptionsDiv.appendChild(addTaskDueDateForm);
    taskOptionsDiv.appendChild(addButton);
    taskDiv.appendChild(taskOptionsDiv);

    return taskDiv;
}
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
    optionsHigh.setAttribute("value", "High");
    const optionsTextHigh = document.createTextNode("High");
    
    const optionsMed = document.createElement("option");
    optionsMed.setAttribute("value", "Medium");
    const optionsTextMed = document.createTextNode("Medium");
    
    const optionsLow = document.createElement("option");
    optionsLow.setAttribute("value", "Low");
    const optionsTextLow = document.createTextNode("Low");
    
    optionsHigh.appendChild(optionsTextHigh);
    optionsMed.appendChild(optionsTextMed);
    optionsLow.appendChild(optionsTextLow);
    addPrioForm.appendChild(optionsHigh);
    addPrioForm.appendChild(optionsMed);
    addPrioForm.appendChild(optionsLow);
    
    const addLabelPrio = document.createElement("label");
    addLabelPrio.setAttribute("for", "setPrio");
    addLabelPrio.innerHTML = "Priority: ";
    
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
    addButton.innerHTML = "Add Task"

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
            `<div class="taskParaDiv"><p>Task name: <b>${createNewProject.getDescription()[createNewProject.task.length -1]}</b></p>
            <p>Priority: <b>${createNewProject.getPrio()[createNewProject.task.length -1]}</b></p>
            <p>Due: <b>${createNewProject.getDueDate()[createNewProject.task.length -1]}</b></p></div>`;

        
        const taskButtonDiv = document.createElement("div");
        taskButtonDiv.classList.add("taskButtonDiv");

        const completeButton = addCompleteButton(createNewProject, getTaskDivId, currentTasksDiv, isTaskCompleted);

        const deleteButton = addDeleteButton(createNewProject, getTaskDivId, currentTasksDiv, taskDiv)

        const editButton = addEditButton(createNewProject, getTaskDivId, currentTasksDiv, isTaskCompleted, taskDiv, taskButtonDiv);

        taskDiv.appendChild(currentTasksDiv);
        currentTasksDiv.appendChild(taskButtonDiv);
        taskButtonDiv.appendChild(completeButton);
        taskButtonDiv.appendChild(editButton);
        taskButtonDiv.appendChild(deleteButton);
})

    //const hrLine = document.createElement("hr");
 
    taskOptionsDiv.appendChild(addLabel);
    taskOptionsDiv.appendChild(addTaskForm);
    taskOptionsDiv.appendChild(addLabelPrio);
    taskOptionsDiv.appendChild(addPrioForm);
    taskOptionsDiv.appendChild(addTaskDueDateLabel);
    taskOptionsDiv.appendChild(addTaskDueDateForm);
    taskOptionsDiv.appendChild(addButton);
    taskDiv.appendChild(taskOptionsDiv);
    //taskDiv.appendChild(hrLine)

    return taskDiv;
}
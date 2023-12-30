import { Project } from "./constructor";


export function createTask(createNewProject){
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
    
    taskDiv.setAttribute("id", "taskDiv");
    
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
    
    const addTaskDueDateLabel = document.createElement("label");
    addTaskDueDateLabel.setAttribute("for", "taskDueDate");
    addTaskDueDateLabel.innerHTML = "Due: ";
    
    //DOM for adding button to add Tasks
    const addButton = document.createElement("button");
    addButton.innerHTML = "add"

    //DOM for adding tasks options into a div
    const taskOptionsDiv = document.createElement("div");
    taskOptionsDiv.classList.add("taskOptions")

        
        
        
    //Tasks being added to array
    addButton.addEventListener("click", ()=>{
        const taskValue = addTaskForm.value;
        const prioValue = addPrioForm.value;
        const dueDateValue = addTaskDueDateForm.value;
    
    
        createNewProject.addTask({ 
            description: taskValue,
            priority: prioValue,
            dueDate: dueDateValue,
            id: taskCounter
        });

        //DOM for displaying tasks
        const currentTasksDiv = document.createElement("div");
        currentTasksDiv.classList.add("currentTasks");
        currentTasksDiv.setAttribute("data-id", taskCounter);
            
        addTaskForm.value = "";
        console.log(createNewProject);

        currentTasksDiv.innerHTML = 
            `Task name: ${createNewProject.getDescription()[taskCounter]},
             priority: ${createNewProject.getPrio()[taskCounter]},
             it is due till ${createNewProject.getDueDate()[taskCounter]}`;

        //Deleting Tasks
        const deleteTaskButton = document.createElement("button");
        deleteTaskButton.classList.add("deleteTask");
        deleteTaskButton.setAttribute("data-id", taskCounter)
        deleteTaskButton.innerHTML = "Delete Task";

        const getTaskDelBtnId = deleteTaskButton.dataset.id;
        const getTaskDivId = currentTasksDiv.dataset.id;

        deleteTaskButton.addEventListener("click", ()=>{
            console.log(createNewProject.task[getTaskDelBtnId])

            createNewProject.task.splice(currentTasksDiv,1);
            console.log(createNewProject);

            taskDiv.removeChild(currentTasksDiv)
                
            taskCounter--;
        });

        //Editing tasks
        const editTaskButton = document.createElement("button");
        editTaskButton.innerHTML = "Edit Task";

        editTaskButton.addEventListener("click", ()=>{
            let editTaskName = prompt("New Task name:");
            createNewProject.task[currentTasksDiv].description = editTaskName;
        })

        taskDiv.appendChild(currentTasksDiv);
        currentTasksDiv.appendChild(deleteTaskButton);
        currentTasksDiv.appendChild(editTaskButton);

        taskCounter++;
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
import { Project } from "./constructor";


export function createTask(createNewProject){
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

        //DOM for displaying tasks
        const currentTasksDiv = document.createElement("div");
        currentTasksDiv.classList.add("currentTasks");
        
        
        //Tasks being added to array
         addButton.addEventListener("click", ()=>{
            const taskValue = addTaskForm.value;
            const prioValue = addPrioForm.value;
            const dueDateValue = addTaskDueDateForm.value;
    
    
            createNewProject.addTask({ 
                description: taskValue,
                priority: prioValue,
                dueDate: dueDateValue 
            });
            
            addTaskForm.value = "";
            console.log(createNewProject);
            console.log(createNewProject.task)
            //currentTasksDiv.innerHTML = createNewProject.task;
        })


        taskOptionsDiv.appendChild(addLabel);
        taskOptionsDiv.appendChild(addTaskForm);
        taskOptionsDiv.appendChild(addLabelPrio);
        taskOptionsDiv.appendChild(addPrioForm);
        taskOptionsDiv.appendChild(addTaskDueDateLabel);
        taskOptionsDiv.appendChild(addTaskDueDateForm);
        taskOptionsDiv.appendChild(addButton);
        taskDiv.appendChild(taskOptionsDiv);
        taskDiv.appendChild(currentTasksDiv);
        

        return taskDiv;
}
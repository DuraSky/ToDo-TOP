export const taskDiv = document.createElement("div");


export function createTask(createNewProject){
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

            console.log(createNewProject)
            addTaskForm.value = "";
         })
    
        
        taskDiv.appendChild(addLabel);
        taskDiv.appendChild(addTaskForm);
        taskDiv.appendChild(addLabelPrio);
        taskDiv.appendChild(addPrioForm);
        taskDiv.appendChild(addTaskDueDateLabel);
        taskDiv.appendChild(addTaskDueDateForm);
        taskDiv.appendChild(addButton);

        return {taskDiv}
}
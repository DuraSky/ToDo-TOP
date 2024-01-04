
export function storeProject(project) {
    let existingProjects = JSON.parse(localStorage.getItem("Projects")) || [];

    // Check if the project with the same name already exists
    const existingProject = existingProjects.find((projectObj) => {
        return projectObj.projectName === project.projectName;
    });

    if (existingProject) {
        // If a project with the same name exists, show an alert and return
        alert("Names are the same");
        return true;
    } else {
        // If no project with the same name exists, add the new project
        existingProjects.push(project);
        localStorage.setItem("Projects", JSON.stringify(existingProjects));
        console.log("Project added successfully");
        return false;
    }
}

export function deleteProject(projectToDelete) {

    const existingProjects = JSON.parse(localStorage.getItem("Projects")) || [];
    console.log(JSON.stringify(existingProjects));
    console.log(existingProjects.length)

     for(let i = 0; i < existingProjects.length; i++){
         if(existingProjects[i].projectName===projectToDelete.projectName){
            console.log("deleting this")
            existingProjects.splice(i, 1);
            localStorage.setItem("Projects", JSON.stringify(existingProjects))
            console.log(existingProjects)
         }
     }
}

export function updateProjectName(projectToEdit, newNameIs){
    const existingProjects = JSON.parse(localStorage.getItem("Projects")) || [];

    for(let i = 0; i < existingProjects.length; i++){
        if(existingProjects[i].projectName===projectToEdit.projectName){
            existingProjects[i].projectName = newNameIs;
            console.log(existingProjects[i].projectName)
            localStorage.setItem("Projects", JSON.stringify(existingProjects))

        }
    }

}

export function storeTasks(storeTask, projectName){
    let existingProjects = JSON.parse(localStorage.getItem("Projects")) || [];

     for(let i = 0; i < existingProjects.length; i++){
         if(existingProjects[i].projectName === projectName.projectName){
            existingProjects[i].task = storeTask;
         }else{
             console.log("we dont match")
         }
     }
     localStorage.setItem("Projects", JSON.stringify(existingProjects));
}


export function deleteTask(taskToDelete, projectName) {
    let existingProjects = JSON.parse(localStorage.getItem("Projects")) || [];

    for (let i = 0; i < existingProjects.length; i++) {
        if (existingProjects[i].projectName === projectName.projectName) {

            const indexToDelete = existingProjects[i].task.findIndex(task => task.id === taskToDelete.id);

            // If the task is found, remove it from the 'task' array
            if (indexToDelete !== -1) {
                existingProjects[i].task.splice(indexToDelete, 1);
                console.log("Updated tasks:", existingProjects[i].task);
            } else {
                console.log("Task not found:", taskToDelete);
            }
        } else {
            console.log("No match for:", projectName.projectName);
        }
    }

    // Update local storage with the modified array
    localStorage.setItem("Projects", JSON.stringify(existingProjects));
}

export function updateTaskName(taskToUpdate, projectName, newName){
    let existingProjects = JSON.parse(localStorage.getItem("Projects")) || [];

    for (let i = 0; i < existingProjects.length; i++) {
        if (existingProjects[i].projectName === projectName.projectName) {
            //run for loop on existingProjects[i].task and match it agains taskToUpdate
            for(let j = 0; j < existingProjects[i].task.length; j++){
                if(existingProjects[i].task[j].id === taskToUpdate.id){
                    console.log("match");
                    existingProjects[i].task[j].description = newName;
                    localStorage.setItem("Projects", JSON.stringify(existingProjects));
                }
            }
        }
    }
}

export function getProjectsFromStorage() {
    const storedProjects = localStorage.getItem("Projects");
    return storedProjects ? JSON.parse(storedProjects) : [];
}
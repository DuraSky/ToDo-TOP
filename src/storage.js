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

    // for(let i = 0; i < existingProjects.length; i++){
    //     if(existingProjects[i].projectName === projectName.projectName){
    //         console.log("match found at ")
    //         console.log(existingProjects[i].task)
    //         console.log("pushing");
    //         console.log(storeTask)
    //         existingProjects[i].task.push(storeTask);
    //     }else{
    //         console.log("we dont match")
    //     }
    // }
    // localStorage.setItem("Projects", JSON.stringify(existingProjects));

    const existingProject = existingProjects.find((projectObj) => {
        return projectObj.projectName === project.projectName;
    });
}


export class Project {
    constructor(projectName){
        this.projectName = projectName;
        this.task = [];
    }

    addTask(newTask){
        this.task.push(newTask);
    }
}
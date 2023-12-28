export class Project {
    constructor(projectName){
        this.projectName = projectName;
        this.task = [];
    }

    addTask(newTask){
        this.task.push(newTask);
    }

    displayTask(){
        let toString = this.task.toString();
        console.log(toString)
        return toString;
    }
}
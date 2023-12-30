export class Project {
    constructor(projectName){
        this.projectName = projectName;
        this.task = [];
    }

    addTask(newTask){
        this.task.push(newTask);
    }

    displayTask(index){
        console.log(this.task[index-1])
    }

    getDescription(){
        return this.task.map(task => task.description); 
    }

    getPrio(){
        return this.task.map(task => task.priority); 
    }

    getDueDate(){
        return this.task.map(task => task.dueDate); 
    }

    getID(i){
        //return console.log(this.task.map(task => task.id));
        if(i ===this.task.id){
            console.log("id is: " + task.id)
        }else{console.log("wrong")}
    }
}
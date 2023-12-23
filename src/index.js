const content = document.getElementById("content");
const projectNameForm = document.getElementById("projectName");
const subButton = document.getElementById("submit");

let allProjects = [];


class Project {
    constructor(projectName){
        this.projectName = projectName;
    }
}

// class addProperties extends Project{
//     constructor
// }

subButton.addEventListener("click", ()=>{
    const projectNameDiv = document.createElement("div");
    projectNameDiv.setAttribute("id", "projectNameDiv");

    const addProperty = document.createElement("input");
    addProperty.setAttribute("type", "text");
    addProperty.setAttribute("name", "setProperty");
    addProperty.setAttribute("id", "setProperty");
    const addLabel = document.createElement("label");
    addLabel.setAttribute("for", "setProperty");
    addLabel.innerHTML = "Add Property";
    const addButton = document.createElement("button");
    addButton.innerHTML = "add"

    addButton.addEventListener("click", ()=>{
        const propertyValue = addProperty.value;
        return propertyValue;
    })

    const theNameIs = projectNameForm.value;
    console.log(theNameIs);
    let createNewProject = new Project(theNameIs);
    allProjects.push(createNewProject);
    projectNameDiv.innerHTML = theNameIs;

    content.appendChild(projectNameDiv);
    projectNameDiv.appendChild(addLabel);
    projectNameDiv.appendChild(addProperty);
    projectNameDiv.appendChild(addButton);
    

    projectNameForm.value = "";
    // console.log(createNewProject);
    console.log(...allProjects);
});

//console.log(propertyValue)










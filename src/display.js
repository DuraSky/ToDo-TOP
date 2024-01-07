export function displayProjectFromStorage(theNameIs){
    let existingProjects = JSON.parse(localStorage.getItem("Projects")) || [];

    if (existingProjects.length > 0) {
        for (let i = 0; i < existingProjects.length; i++) {
            // Check if the project name matches the provided name
            if (existingProjects[i].projectName === theNameIs) {
                return theNameIs; // Return the provided name if found
            }
        }

        // If the provided name is not found, return the name of the last project
        return existingProjects[existingProjects.length - 1].projectName;
    } else {
        return theNameIs;
    }
}
import Task from "./task.js";  

 function getTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // Convert to class instances while keeping the ID
    return tasks.map(task => new Task(task.name, task.completed, task.id));
}


 function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
}
export {getTasks,saveTasks}
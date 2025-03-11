import Task from "./task.js";  

export function getTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // Convert to class instances while keeping the ID
    return tasks.map(task => new Task(task.name, task.completed, task.id));
}


export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
}
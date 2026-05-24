import { saveTasks, getTasks } from "./storage.js";
import Task from "./task.js";

export default class Manager{
    constructor() {
        this.tasks = getTasks();
    }
    addTask(name){
        let newTask=new Task(name);
        this.tasks.push(newTask);
        //later
        this.updateStorage()
    }
    deleteTask(id){
        this.tasks=this.tasks.filter(task=>task.id!=id)
        //later
        this.updateStorage()
    }
    toggleTaskCompletion(id){
        let foundTask=this.tasks.find((task)=>task.id==id)
        foundTask.toggleCompletion()
        console.log(foundTask)
       this.updateStorage()
    }
    //after every change we should update the localStorage
    updateStorage() {
        saveTasks(this.tasks);
    }
}
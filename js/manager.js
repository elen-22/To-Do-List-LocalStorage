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
        for(let task of this.tasks){
            if(task.id==id){
                //from task class as we have pushed its object to the this.tasks array(handled in getTasks)
                task.toggleCompletion()
                //later
                this.updateStorage();
                break;
            }
        }
    }
    //after every change we should update the localStorage
    updateStorage() {
        saveTasks(this.tasks);
    }
}
import Manager from "./manager.js";

const taskManager = new Manager();
const taskList = document.querySelector("#taskList");
const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#taskInput");

//newly added
document.addEventListener("DOMContentLoaded", displayTasks);

addBtn.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName) {
        taskManager.addTask(taskName);
       
        displayTasks();
    }
    taskInput.value = "";
});

function displayTasks() {
   
     taskList.innerHTML = "";
    taskManager.tasks.forEach(task => {
        const li = document.createElement("li");
         li.className ='task';
        li.innerHTML = `
           <span class="${task.completed ? "complete" : ""}">${task.name}</span>
            <div>
                <button class="toggle" >complete</button>
                <button class="delete" >remove</button>
            </div>
        `;
        //Selects the button with toggle class inside the current li tag
          li.querySelector(".toggle").addEventListener("click", () => {
            taskManager.toggleTaskCompletion(task.id);
            displayTasks();
            console.log(taskManager)
        });

        li.querySelector(".delete").addEventListener("click", () => {
            if(confirm("Are you sure you want to delete the task")){
                taskManager.deleteTask(task.id);
            }
            
            displayTasks();
        });

        taskList.appendChild(li);
    });
}

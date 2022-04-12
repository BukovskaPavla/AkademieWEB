console.log('funguju!');
import { Task } from "./Task/index.js"
import { TaskList } from "./TaskList/index.js";


const tasks = [
    {
        nazev: "Zasadit kytky"
    },
    {
        nazev: "Uklidit kuchyň"
    },
    {
        nazev: "Prodtřídit dětské oblečení"
    },{
        nazev: "Upéct velikonoční perníčky"
    }
]



const taskList = document.querySelector('.todo')
taskList.innerHTML += TaskList(Task)


const todoTasks = document.querySelector('.todo__tasks')
    for (let i = 0; i < tasks.length; i++ ){
        todoTasks.innerHTML += Task(tasks[i])
    }
     
// define dom element

let form = document.querySelector("#task_form");
let taskInput = document.querySelector("#new_task");
let filter = document.querySelector("#task_filter");
let taskList = document.querySelector("#tasks");
let clearBtn = document.querySelector("#clear_task_btn");

// event listener for form submit

form.addEventListener("submit", addTask);

// event listener for clear list

clearBtn.addEventListener("click", clearList);

// event listener for filter list

filter.addEventListener("input", filterList);

// event listener for task list

taskList.addEventListener("click", removeList);

document.addEventListener('DOMContentLoaded', showTasks);

// define function

function addTask(e) {
    e.preventDefault();
    if(taskInput.value != ""){
        taskList.innerHTML += `<li>${taskInput.value} &nbsp; <a href="javascript:void(0)">x</a></li>`;
        storeTask(taskInput.value);
        taskInput.value = '';
    }else{
        alert("Add a task!");
    }
}

function clearList(e){
    taskList.innerHTML = ``;
    localStorage.clear();
}

function filterList(e){
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        console.log(task.firstChild);
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = "block";
        }else{
            task.style.display = "none";
        }
    });
}

function removeList(e){
    if(e.target.hasAttribute("href") && confirm("Are You Sure?")){
        let tasks;
        e.target.parentNode.remove();
        if(localStorage.getItem('tasks') === null){
            tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.pop(e.target.parentNode.firstChild.textContent);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

// store data in local storage

function storeTask(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(element => {
        taskList.innerHTML += `<li>${element} &nbsp; <a href="javascript:void(0)">x</a></li>`;
    });
}
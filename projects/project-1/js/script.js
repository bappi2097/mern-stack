var list = [];  // array for store tasks

// define dom element

let form = document.querySelector("#task_form");
let taskInput = document.querySelector("#new_task");
let filter = document.querySelector("#task_filter");
let taskList = document.querySelector("#tasks");
let clearBtn = document.querySelector("#clear_task_btn");

// event listener for form submit

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(taskInput.value != ""){
        list.push(taskInput.value);
        taskList.innerHTML += `<li>${document.querySelector("#new_task").value}</li>`;
        taskInput.value = '';
    }else{
        alert("Add a task!");
    }
});

// event listener for clear list

clearBtn.addEventListener("click", () => {
    list = [];
    taskList.innerHTML = ``;
});

// event listener for filter list

filter.addEventListener("input", () => {
    taskList.innerHTML = ``;
    list.filter(str => str.includes(filter.value)).forEach(element => {
        taskList.innerHTML += `<li>${element}</li>`;
    })
});
var list = [];
document.querySelector("#task_form").addEventListener("submit", (e) => {
    e.preventDefault();
    if(document.querySelector("#new_task").value != ""){
        list.push(document.querySelector("#new_task").value);
        document.querySelector("#tasks").innerHTML += `<li>${document.querySelector("#new_task").value}</li>`;
        document.querySelector("#new_task").value = '';
    }
});

document.querySelector("#clear_task_btn").addEventListener("click", () => {
    list = [];
    document.querySelector("#tasks").innerHTML = ``;
});

document.querySelector("#task_filter").addEventListener("input", () => {
    document.querySelector("#tasks").innerHTML = ``;
    list.filter(str => str.includes(document.querySelector("#task_filter").value)).forEach(element => {
        document.querySelector("#tasks").innerHTML += `<li>${element}</li>`;
    })
});
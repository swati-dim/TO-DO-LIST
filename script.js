let task = document.getElementById("task");
let taskList = document.querySelector(".task-list");

function addTask() {
    let newTask = task.value ;
    if (newTask!="") {
        let li = document.createElement("li");
        li.innerText = newTask ;
        let span = document.createElement("span");
        span.innerText = "&#xd7";
        li.appendChild(span);
        taskList.appendChild(li);
        console.log(newTask);
    }
    else{
        alert("Enter a task");
    }
    saveData();
    task.value = "" ;
}
taskList.addEventListener("click",function(event){
    if(event.target.tagName=="LI"){
        event.target.classList.toggle("checked");
        saveData();
        console.log("clicked on li tag");
    }
    else if (event.target.tagName == "SPAN") {
        event.target.parentElement.remove();
        saveData();
        console.log("clicked on cross");
    }
},
false
);

function saveData() {
    localStorage.setItem("data",taskList.innerHTML);
}
function fetchData() {
    taskList.innerHTML = localStorage.getItem("data");
}
fetchData();
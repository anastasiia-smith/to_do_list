const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("input-task");
const body = document.querySelector("body");
let taskListArray = JSON.parse(localStorage.getItem("tasks")) || [];
for (let i = 0; i < taskListArray.length; i++) {
    let storedTask = document.createElement('li');
    storedTask.innerHTML = "<input type=\"checkbox\"><span class=\"task\">" + taskListArray[i] + "</span><button class=\"delete-btn\">x</button>";
    taskList.appendChild(storedTask);
}
document.getElementById("add-task-button").onclick = function() {
    if (taskInput.value.length > 0) {
        let newTaskListElement = document.createElement("li");
        newTaskListElement.innerHTML = "<input type=\"checkbox\"><span class=\"task\">" + taskInput.value + "</span><button class=\"delete-btn\">x</button>";
        taskList.appendChild(newTaskListElement);
        taskListArray.push(taskInput.value);
        localStorage.setItem("tasks", JSON.stringify(taskListArray));
        taskInput.value = "";
    } else {
        alert('The input field is empty');
    }
    taskInput.focus();
};
body.addEventListener("click", event => {
    if(event.target.matches(".delete-btn")){
        event.target.parentElement.remove();
    }
})
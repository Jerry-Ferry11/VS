function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

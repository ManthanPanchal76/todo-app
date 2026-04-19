var userName = prompt("Enter your name:");
alert("Welcome " + userName);

function addTask() {
    console.log("Button clicked");

    var input = document.getElementById("taskInput");
    var task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    var check = confirm("Do you want to add this task?");
    if (check === false) {
        console.log("User cancelled");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = task;

    li.onclick = function () {
        alert("Task clicked");

        var done = confirm("Mark as completed?");
        if (done === true) {
            li.style.textDecoration = "line-through";
        }
    };

    document.getElementById("taskList").appendChild(li);

    console.log("Task added: " + task);

    input.value = "";
}
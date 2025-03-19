const inputTask = document.getElementById('inputTask');
const list = document.getElementById('list');
let editMode = null;

function addTask() {
    if (inputTask.value === "") {
        alert("Please Enter Task");
        return;
    }

    if (editMode) {
        // If editing, update the existing task
        editMode.firstChild.nodeValue = inputTask.value; 
        editMode = null;
        document.getElementById('add-task').innerText = "Add Task"; // Reset button text
    } else {
        const newLi = document.createElement('li');
        newLi.id = "task";
        newLi.innerHTML = `${inputTask.value} 
            <button onclick='deleteTask(event)' style='margin-left: auto; background: red;'>Delete</button>
            <button onclick='editTask(event)' style='background: orange'>Edit</button>`;

        list.appendChild(newLi);
    }

    inputTask.value = "";  
}

function deleteTask(event) {
    if (confirm("Are you sure you want to delete this task?")) {
        event.target.parentElement.remove();
    }
}

function editTask(event) {
    let li = event.target.parentElement;
    inputTask.value = li.firstChild.nodeValue.trim();
    document.getElementById('add-task').innerText = "Update Task"; // Change button text
    editMode = li;
}

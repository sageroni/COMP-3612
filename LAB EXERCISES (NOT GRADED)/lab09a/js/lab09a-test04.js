document.addEventListener("DOMContentLoaded", function () {
    
    //array of task objects
    // changed from const to let in test knowledge part 5
    let tasksArray = [];

    function Task(details, date) {
        this.id = Date.now(); 
        this.details = details;
        this.date = date;
    }
    const addTaskButton = document.getElementById("addTask");
    const taskDetailsInput = document.getElementById("tdetails");
    const taskDateInput = document.getElementById("tdate");
    const todoDiv = document.querySelector(".todo");
    const taskTable = document.getElementById("taskTable");

    // event handler for add task button
    addTaskButton.addEventListener("click", function (e) {
        e.preventDefault();
        const detailsValue = taskDetailsInput.value;
        const dateValue = taskDateInput.value;

        if (!detailsValue || !dateValue) {
            return;
        }
        todoDiv.classList.remove("hidden");
        todoDiv.classList.add("visible");

        const newTask = new Task(detailsValue, dateValue);
        tasksArray.push(newTask);

        const row = document.createElement("tr");
        
        const dateCell = document.createElement("td");
        dateCell.textContent = newTask.date;
        
        const detailsCell = document.createElement("td");
        detailsCell.textContent = newTask.details;

        row.appendChild(dateCell);
        row.appendChild(detailsCell);
        taskTable.appendChild(row);

        taskDetailsInput.value = "";
        taskDateInput.value = "";
    });
});
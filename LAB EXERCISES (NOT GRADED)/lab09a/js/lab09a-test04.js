document.addEventListener("DOMContentLoaded", function () {
    
    //array of task objects
    // changed from const to let in test knowledge part 5
    let tasksArray = [];

    function Task(details, date) {
        this.id = Date.now().toString();
        this.details = details;
        this.date = date;
    }
    const addTaskButton = document.getElementById("addTask");
    const taskDetailsInput = document.getElementById("tdetails");
    const taskDateInput = document.getElementById("tdate");
    const todoDiv = document.querySelector(".todo");
    const asideElement = document.querySelector("aside");
    const taskTable = document.getElementById("taskTable");
    const clearTableButton = document.getElementById("clearTable");

    function redrawTable() {
        while (taskTable.firstChild) {
            taskTable.removeChild(taskTable.firstChild);
        }
        tasksArray.forEach(function (task) {
            const row = document.createElement("tr");

            const dateCell = document.createElement("td");
            dateCell.textContent = task.date;

            const detailsCell = document.createElement("td");
            detailsCell.textContent = task.details;

            const actionCell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.type = "button";
            
            deleteButton.dataset.id = task.id;

            deleteButton.addEventListener("click", function (e) {
                const targetId = e.currentTarget.dataset.id;
                
                tasksArray = tasksArray.filter(function (t) {
                    return t.id !== targetId;
                });
                redrawTable();
                // check vis if last item was removed
                checkVisibility();
            });
            actionCell.appendChild(deleteButton);
            row.appendChild(dateCell);
            row.appendChild(detailsCell);
            row.appendChild(actionCell);
            taskTable.appendChild(row);
        });
    }
    
    function checkVisibility() {
        if (tasksArray.length > 0) {
            todoDiv.classList.remove("hidden");
            todoDiv.classList.add("visible");
            asideElement.classList.remove("hidden");
            asideElement.classList.add("visible");
        } else {
            todoDiv.classList.remove("visible");
            todoDiv.classList.add("hidden");
            asideElement.classList.remove("visible");
            asideElement.classList.add("hidden");
        }
    }
    
    // event handler for add task button
    addTaskButton.addEventListener("click", function (e) {
        e.preventDefault();

        const detailsValue = taskDetailsInput.value;
        const dateValue = taskDateInput.value;

        if (!detailsValue || !dateValue) {
            return;
        }
        const newTask = new Task(detailsValue, dateValue);
        tasksArray.push(newTask);

        // update vis and sync table
        checkVisibility();
        redrawTable();
        // Clear input 
        taskDetailsInput.value = "";
        taskDateInput.value = "";
    });

    clearTableButton.addEventListener("click", function (e) {
        e.preventDefault();
        tasksArray = [];
        redrawTable();
        checkVisibility();
    });
});
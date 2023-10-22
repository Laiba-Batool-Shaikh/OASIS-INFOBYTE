// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const pendingList = document.getElementById('pending-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-button" onclick="completeTask(this)">Complete</button>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;
        pendingList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to mark a task as completed
function completeTask(button) {
    const listItem = button.parentElement;
    listItem.classList.add('completed-task');

    const completedList = document.getElementById('completed-list');
    completedList.appendChild(listItem);

    // Remove the "Complete" button
    button.remove();
}

// Function to delete a task
function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

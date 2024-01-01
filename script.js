document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        // Create a new task container
        var taskContainer = document.createElement('div');
        taskContainer.classList.add('task');

        // Create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create span for task text
        var taskText = document.createElement('span');
        taskText.textContent = document.querySelector('#newtask input').value;
        taskText.classList.add('task-text');

        // Create delete button
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        deleteButton.classList.add('delete');

        // Append elements to task container
        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskText);
        taskContainer.appendChild(deleteButton);

        // Append the task container to the tasks div
        document.querySelector('#tasks').appendChild(taskContainer);

        // Set up event listeners for the delete button and checkbox
        deleteButton.onclick = function () {
            taskContainer.remove();
        };

        checkbox.onclick = function () {
            taskText.classList.toggle('completed');
        };

        // Clear the input
        document.querySelector("#newtask input").value = "";
    }
};

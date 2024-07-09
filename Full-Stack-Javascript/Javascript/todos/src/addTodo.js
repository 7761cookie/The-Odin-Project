const addTodo = (name, description, dueDate, priority, projectId) => {
    const projectDiv = document.querySelector(`#project-${projectId}`);

    const todoElement = document.createElement('div');
    todoElement.className = 'todo';
    todoElement.innerHTML = `
            <h2>${name}</h2>
            <p>${description}</p>
            <p>Due Date: ${dueDate}</p>
            <p>Priority: ${priority}</p>
            <button id="delete-todo">x</button>
            <br>
        `;

    projectDiv.querySelector('.todos').appendChild(todoElement);
};

export default addTodo;

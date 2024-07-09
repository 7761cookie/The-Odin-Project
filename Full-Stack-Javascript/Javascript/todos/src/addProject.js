const addProject = (name, description, dueDate, priority) => {
    const projectsContainer = document.querySelector('#main-content');


    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.id = `project-${Date.now()}`;
    projectElement.innerHTML = `
            <h2>${name}</h2>
            <p>${description}</p>
            <p>Due Date: ${dueDate}</p>
            <p>Priority: ${priority}</p>
            <button id="delete-project">x</button>
            <button id="add-todo-${projectElement.id.split('-')[1]}">+</button>
            <br>
            <div class="todos"></div>
        `;

    projectsContainer.appendChild(projectElement);
};

export default addProject;

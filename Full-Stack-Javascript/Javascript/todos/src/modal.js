import form from "./form";
import addProject from "./addProject";
import addTodo from "./addTodo";

const modal = (buttonId, projectId) => {
    const modalOverlay = document.createElement("div");
    const modalContainer = document.createElement("div");
    const modalContent = document.createElement("div");

    modalOverlay.className = "modal-overlay";
    modalContainer.className = "modal-container";
    modalContent.className = "modal-content";

    modalContent.innerHTML = form;

    modalContainer.appendChild(modalContent);
    modalOverlay.appendChild(modalContainer);
    document.body.appendChild(modalOverlay);

    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    });

    setTimeout(() => {
        const submit = document.getElementById("submit");

        submit.addEventListener("click", (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name').value;
            const description = document.querySelector('input[name="description"]').value;
            const dueDate = document.querySelector('input[name="due-date"]').value;
            const priority = document.querySelector('input[name="priority"]').value;

            if (buttonId === "new-project") {
                addProject(name, description, dueDate, priority);
            } else if (buttonId === "new-todo" && projectId) {
                addTodo(name, description, dueDate, priority, projectId);
            }

            document.body.removeChild(modalOverlay);
        });

    });
};

export default modal;

import modal from "./modal";

const listeners = () => {


    content.addEventListener("click", (event) => {
        const { id } = event.target;

        if (id === "new-project" || id === "new-todo") {
            modal(id);
        }

        if (id.startsWith("add-todo-")) {
            const projectId = id.split("-")[2];
            modal("new-todo", projectId);
        }

        if (id === "delete-project") {
            const projectDiv = event.target.closest('.project');
            projectDiv.remove();
        }

        if (id === "delete-todo") {
            const todoDiv = event.target.closest('.todo');
            todoDiv.remove();
        }
    });

}

export default listeners
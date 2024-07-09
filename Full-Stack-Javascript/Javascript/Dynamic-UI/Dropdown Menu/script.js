document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownContent = document.getElementById("dropdown-content");

    dropdownButton.addEventListener("click", () => {
        const isVisible = dropdownContent.style.display === "block";
        dropdownContent.style.display = isVisible ? "none" : "block";
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".dropdown")) {
            dropdownContent.style.display = "none";
        }
    });
});

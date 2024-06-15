// document.getElementById("form").addEventListener("focus", (e) => {
//     e.target.style.border = "1px solid blue"
// }, true)

// document.getElementById("form").addEventListener("blur", (e) => {
//     e.target.style.border = ""
// }, true)

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();

    // Get all input fields
    const inputs = document.querySelectorAll("input");
    let isValid = true;

    // Check for empty inputs
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.style.border = "2px solid red";
            isValid = false;
        } else {
            input.style.border = "";
        }
    });

    // Get password and confirm password fields
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("cpassword");

    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        confirmPassword.style.border = "2px solid red";
        isValid = false;

        // Check if error message already exists
        if (!document.getElementById("password-error")) {
            const errorMessage = document.createElement("div");
            errorMessage.id = "password-error";
            errorMessage.style.color = "red";
            errorMessage.textContent = "*Passwords do not match";
            password.parentNode.insertBefore(errorMessage, password.nextSibling);
        }
    } else {
        confirmPassword.style.border = "";
        const errorMessage = document.getElementById("password-error");
        if (errorMessage) {
            errorMessage.remove();
        }
    }
})
document.getElementById("form").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let mobile = document.getElementById("mobile");

    let successMsg = document.getElementById("successMsg");

    let isValid = true;

    clearErrors();

    // Name
    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    }

    // Email
    if (!email.value.includes("@")) {
        showError(email, "Enter valid email");
        isValid = false;
    }

    // Password
    if (password.value.length < 6) {
        showError(password, "Minimum 6 characters required");
        isValid = false;
    }

    // Mobile
    if (isNaN(mobile.value) || mobile.value.length !== 10) {
        showError(mobile, "Enter valid 10-digit number");
        isValid = false;
    }

    // Success
    if (isValid) {
        successMsg.innerText = "🎉 You have registered successfully!";
    }

});

function showError(input, message) {
    let error = input.nextElementSibling;
    error.innerText = message;
}

function clearErrors() {
    let errors = document.querySelectorAll(".error");
    errors.forEach(e => e.innerText = "");
}
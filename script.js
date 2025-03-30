document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    
    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Get input values
        const firstName = document.getElementById("firstname").value.trim();
        const lastName = document.getElementById("lastname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phonenumber").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation messages
        let errorMessage = "";

        // Check required fields
        if (firstName === "") {
            errorMessage += "First Name is required.\n";
            isValid = false;
        }
        if (lastName === "") {
            errorMessage += "Last Name is required.\n";
            isValid = false;
        }
        if (email === "") {
            errorMessage += "Email is required.\n";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage += "Invalid email format.\n";
            isValid = false;
        }

        // Phone number validation: Only digits, max 10 numbers
        if (!/^\d{1,10}$/.test(phoneNumber)) {
            errorMessage += "Phone Number must contain only digits (max 10 numbers).\n";
            isValid = false;
        }

        // Password validation: At least 6 characters, includes letters and numbers
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            errorMessage += "Password must be at least 6 characters long and contain both letters and numbers.\n";
            isValid = false;
        }

        // If form is not valid, show alert and prevent submission
        if (!isValid) {
            alert(errorMessage);
            event.preventDefault();
        }
    });
});

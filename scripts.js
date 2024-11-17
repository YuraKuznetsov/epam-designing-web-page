document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const termsAccepted = document.getElementById("terms").checked;

    let message = "";

    if (!fullName) {
        message += "Full Name is required.\n";
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        message += "Valid Email is required.\n";
    }
    if (!password || password.length < 8) {
        message += "Password must be at least 8 characters long.\n";
    }
    if (!termsAccepted) {
        message += "You must accept the Terms and Conditions.\n";
    }

    const formMessage = document.getElementById("formMessage");
    formMessage.classList.remove("hidden");
    if (message) {
        formMessage.textContent = message;
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Registration successful!";
        formMessage.style.color = "green";
    }
});

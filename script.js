function validateSignup() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^\+212[0-9]{9}$/;


    if (!emailRegex.test(email)) {
        document.getElementById('email-error').innerText = "Email invalide";
        return false;
    }

    if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').innerText = "Numéro invalide (10 chiffres)";
        return false;
    }

    if (password.length < 6) {
        document.getElementById('password-error').innerText = "Mot de passe trop court";
        return false;
    }

    document.getElementById('welcome-popup').style.display = 'block';
    return false;
}

function closePopup() {
    document.getElementById('welcome-popup').style.display = 'none';
}

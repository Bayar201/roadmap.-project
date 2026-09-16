const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginMessage = document.getElementById('login-message');
const registerMessage = document.getElementById('register-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    loginMessage.textContent = '';
    loginMessage.className = 'form-message';

    if (!isValidEmail(email)) {
        showMessage(loginMessage, 'Please enter a valid email', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage(loginMessage, 'Password must be at least 6 characters', 'error');
        return;
    }

    showMessage(loginMessage, 'Login successful', 'success');
    console.log('login data:', { email, password });

    setTimeout(() => {
        loginForm.reset();
        loginMessage.textContent = '';
        loginMessage.className = 'form-message';
    }, 2000);
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();

    registerMessage.textContent = '';
    registerMessage.className = 'form-message';

    if (name.length < 2) {
        showMessage(registerMessage, 'Name must contain at least 2 characters', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage(registerMessage, 'Please enter a valid email', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage(registerMessage, 'Password must be at least 6 characters', 'error');
        return;
    }

    if (!/(?=.*[A-Z])(?=.*\d)/.test(password)) {
        showMessage(registerMessage, 'Password needs an uppercase letter and a number', 'error');
        return;
    }

    showMessage(registerMessage, 'Account created successfully! ✓', 'success');
    console.log('register data:', { name, email, password });

    setTimeout(() => {
        registerForm.reset();
        registerMessage.textContent = '';
        registerMessage.className = 'form-message';
    }, 2000);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `form-message ${type}`;
}

const loginEmail = document.getElementById('login-email');
const registerEmail = document.getElementById('register-email');

loginEmail.addEventListener('blur', () => {
    if (loginEmail.value && !isValidEmail(loginEmail.value)) {
        loginEmail.style.borderColor = '#e74c3c';
    } else {
        loginEmail.style.borderColor = 'var(--color-border)';
    }
});

registerEmail.addEventListener('blur', () => {
    if (registerEmail.value && !isValidEmail(registerEmail.value)) {
        registerEmail.style.borderColor = '#e74c3c';
    } else {
        registerEmail.style.borderColor = 'var(--color-border)';
    }
});
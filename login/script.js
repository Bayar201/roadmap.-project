const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginMessage = document.getElementById('login-message');
loginForm.addEventListener( submit, (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    loginMessage.textContent = '';
    loginMessage.className = 'form message';
    if(!isValidEmail(email)) {
        showMessage(loginMessage, 'please enter valid email', 'error');
        return;
    }
    if(password.length < 6) {
        showMessage(loginMessage, 'password must be at least 6 character', 'error');
        return;
    }
    showMessage(loginMessage, 'login successful')
    console.log('login data:', {email, password});
    setTimeout(() => {
        loginForm.reset();
        loginMessage.textContent = '';

    }, 2000);
});
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
     const name = document.getElementById('register-name').value.trim();
     const email = document.getElementById('register-email').value.trim();
     const password = document.getElementById('register-password').value.trim();
     registerMessage.textContent = '';
     registerMessage.className = 'form message';
   if(name.length < 2) {
    showMessage(registerMessage, 'name must has greater character than 2', 'error');
    return;
   }
   if(!IsValidEmail(email)) {
    showMessage(registerMessage, 'please enter a valid email', 'error');
   }
    if(password.length < 6) {
     showMessage(loginMessage, 'password must be at least 6 character', 'error');
    return;
    }
      if (!/(?=.*[A-Z])(?=.*\d)/.test(password)) {
    showMessage(registerMessage, 'Password needs uppercase letter and number', 'error');
    return;
    }
        showMessage(registerMessage, 'Account created successfully! ✓', 'success');
    console.log('Register data:', { name, email, password });
    setTimeout(() => {
        registerForm.reset();
        registerMessage.textContent = '';
    }, 2000);
});

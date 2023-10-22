const loginInput = document.getElementById('login');
const PasswordInput = document.getElementById('Password');
const alertMessage = document.getElementById('alertMessage');
function submitt(){
    const login = loginInput.value;
    const Password = PasswordInput.value;
    if(login==='userxyz' && Password==='12345'){
        alertMessage.innerHTML= 'Login successful!';
        alertMessage.style.color = 'green';
    }
    else{
        alertMessage.innerHTML='Login failed. Please check your username and password.';
        alertMessage.style.color = 'red';
    }
    loginInput.value = ' ';
    PasswordInput.value = ' ';
}
const submitButton = document.querySelector('button');
submitButton.addEventListener('Submitt', submitt);

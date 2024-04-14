window.onload = function() {
    const loginBtn = document.getElementById('login_btn');
    const registerBtn = document.getElementById('register_btn');
    const form = document.getElementById('form');
}

loginBtn.onclick = (event) => {
    form.action = event.target.dataset.endpoint;
    console.log(form.action);
}

registerBtn.onclick = (event) => {
    form.action = event.target.dataset.endpoint
}


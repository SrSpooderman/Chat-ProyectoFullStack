function login(event) {
    var passwordInput = document.getElementById('password');
    var message = passwordInput.nextElementSibling;

    if (message && message.classList.contains('error_pass')) {
        message.parentNode.removeChild(message);
        passwordInput.classList.remove('error_pass');
    }

    event.preventDefault();
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        let respuesta = this.responseText;
        if (respuesta == null || respuesta == "false") {
            var passwordInput = document.getElementById('password');
            var form = document.querySelector('form');

            var message = document.createElement('p');
            message.textContent = 'Correo o Contraseña erronea';
            message.classList.add('error_pass');

            form.insertBefore(message, passwordInput.nextSibling);
        } else {
            sessionStorage.setItem("ClauSession", respuesta);
            sessionStorage.setItem("ClauMail", email);

            window.location.href = "/main.html";
        }
        }
    };
    xhttp.open("GET", "http://localhost:3000/SpiderWeb3/Login?mail=" + encodeURIComponent(email) + "&pass=" + encodeURIComponent(pass), true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

function register(){
    window.location.href = "/crear_usuario.html";
}
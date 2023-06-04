function revisar_clave_sesion(){
    var clave_sesion = sessionStorage.getItem("SpiderWebKey");
    var correo = sessionStorage.getItem("SpiderWebCorreo");
    if (clave_sesion == null){
        console.log("No hay clave sesion");
    }else{
        console.log(clave_sesion);
        console.log(correo);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3000/SpiderWeb3/SessionKeyChecker", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("sessionKey=" + clave_sesion+"&correo=" + correo);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                let respuesta = this.responseText;

                if (respuesta == "True"){
                    window.location.href = "http://localhost:5500/main.html"
                }else{
                    sessionStorage.removeItem("SpiderWebKey");
                    sessionStorage.removeItem("SpiderWebCorreo");
                }
            }
        }
    }
}



function iniciar_sesion(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let inicio_sesion = "email=" + email + "&password=" + password;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/SpiderWeb3/Login", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(inicio_sesion);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = this.responseText;
            if (respuesta == "002"){
                sessionKeyMaker(email)
                sessionStorage.setItem("SpiderWebCorreo", email);
                console.log("Sesion actualizada");
                window.location.href = "http://localhost:5500/main.html"
            }else if (respuesta == "003"){
                alert("Contraseña incorrecta");
            }else if (respuesta == "004"){
                alert("Email incorrecto");
            }
        }
    }
}

function sessionKeyMaker(email){
    sendData = "email="+email;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/SpiderWeb3/SessionKeyMaker", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(sendData);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = this.responseText;
            sessionStorage.setItem("SpiderWebKey", respuesta);
        }
    }
}
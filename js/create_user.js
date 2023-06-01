function contraseñas_iguales(event){
    event.preventDefault();
    let contraseña1 = document.getElementById("password").value;
    let contraseña2 = document.getElementById("password2").value;
    
    if (contraseña1 !== contraseña2){
        alert("Las contraseñas no coinciden");
        return false;
    }

    enviar_datos_usuario();
}

function enviar_datos_usuario(){
	let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	
	let usuario = "username=" + username+"&"+"email=" + email +"&"+"password=" + password;
	
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "http://localhost:3000/SpiderWeb3/Create_User", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(usuario);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Comunicación exitosa");
            console.log(username+" "+email+" "+password+"\n"+usuario);  


            let respuesta = this.responseText;
            console.log(respuesta);

            if (respuesta === "Usuario creado") {
                alert("El usuario se ha creado exitosamente.");
            } else if (respuesta === "Correo ya registrado") {
                alert("El correo ya está registrado.");
            } else {
                alert("Error desconocido: " + respuesta);
            }
        }
    }
}
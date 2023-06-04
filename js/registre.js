function contraseñas_iguales(event){
    event.preventDefault();
    let contraseña1 = document.getElementById("password").value;
    let contraseña2 = document.getElementById("password2").value;
    
    if (contraseña1 !== contraseña2){
        alert("Las contraseñas no coinciden");
        return false;
    }

    registre();
}

function registre(){
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let mail = document.getElementById('email').value;
    let codeCountry = document.getElementById('codeCountry').value;

    let enviar = "user="+user+"&pass="+pass+"&mail="+mail+"&codeCountry="+codeCountry;
    console.log(enviar);

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/SpiderWeb3/Register", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(enviar);
    window.location.href = "/login.html";
}
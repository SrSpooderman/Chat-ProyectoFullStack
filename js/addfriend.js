function addfriend(){
    let mail =sessionStorage.getItem("ClauMail");
    let session = sessionStorage.getItem("ClauSession");
    let friend = document.getElementById("addfriend").value;
    var friendlist = document.getElementById("friendlist");
    
    let enviar = "mail="+mail+"&session="+session+"&friend="+friend;
    console.log(enviar);

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/SpiderWeb3/Friend", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(enviar);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = this.responseText;
            if (respuesta == 0){
                alert("Server no responde");
            }else if (respuesta == 1){
                var option = document.createElement("li");
                option.setAttribute("data-valor", friend);
                option.textContent = friend;
                friendlist.appendChild(option);
            }else if (respuesta == 2){
                alert("Correo no encontrado");
            }else if (respuesta == 3){
                window.location.href = "/login.html";
            }
        }
    }
}
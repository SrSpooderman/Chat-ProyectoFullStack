function repfriendlist(){
    var friendlist = document.getElementById("friendlist");
    let session = sessionStorage.getItem("ClauSession");
    let mail =sessionStorage.getItem("ClauMail");


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = JSON.parse(this.responseText);

            for (let obj of respuesta) {
                var option = document.createElement("li");
                option.setAttribute("data-valor", obj);
                option.addEventListener("click", function() {
                    cambiarValorRadio(obj);
                });
                option.textContent = obj;
                friendlist.appendChild(option);
            }
        }
    };
    xhttp.open("GET", "http://localhost:3000/SpiderWeb3/Friend?mail=" + encodeURIComponent(mail) + "&session=" + encodeURIComponent(session), true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

function cambiarValorRadio(valor) {
    var radios = document.getElementsByName("opcion");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked === true) {
            radios[i].value = valor
            break;
        }
    }
}
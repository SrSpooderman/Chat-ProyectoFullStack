function repsms(){
    let session = sessionStorage.getItem("ClauSession");
    let mail =sessionStorage.getItem("ClauMail");

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = JSON.parse(this.responseText);
            var radios = document.getElementsByName("opcion");
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].value === respuesta.emisor) {
                    let chatid = radios[i].id;
                    var xat = document.getElementById("xat"+chatid);
                    var chat_line = document.createElement("p");
                    chat_line.textContent = respuesta.emisor+" - "+respuesta.text;
                    chat_line.classList.add("receptor");
                    xat.appendChild(chat_line);
                    break;
                } else{

                }
            }
        }
    };
    xhttp.open("GET", "http://localhost:3000/SpiderWeb3/Xat?mail=" + encodeURIComponent(mail) + "&session=" + encodeURIComponent(session), true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

setInterval(repsms, 500);

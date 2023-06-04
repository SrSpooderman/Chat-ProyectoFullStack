function sendsms(){
    let session = sessionStorage.getItem("ClauSession");
    let mail =sessionStorage.getItem("ClauMail");
    let sms = document.getElementById("sendmessage").value
    let receptor;

    var radios = document.getElementsByName("opcion");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked === true) {
            receptor = radios[i].value;
            break;
        }
    }

    let enviar = "session="+session+"&mail="+mail+"&receptor="+receptor+"&sms="+sms;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/SpiderWeb3/Xat", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(enviar);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked === true){
                    let chatid = radios[i].id;
                    var xat = document.getElementById("xat"+chatid);
                    var chat_line = document.createElement("p");
                    chat_line.textContent = "Tu"+" - "+sms;
                    chat_line.classList.add("emisor");
                    xat.appendChild(chat_line);
                    document.getElementById("sendmessage").value = "";
                }
            }
        }
    }
}
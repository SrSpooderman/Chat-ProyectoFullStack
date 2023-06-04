function lista_paises() {
    var select_country = document.getElementById("codeCountry");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = JSON.parse(this.responseText);

            for (let obj of respuesta) {
                let option = document.createElement("option");
                option.value = obj.code;
                option.textContent = obj.name;
                select_country.appendChild(option);
            }
        }
    };
    xhttp.open("GET", "http://localhost:3000/SpiderWeb3/Register", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
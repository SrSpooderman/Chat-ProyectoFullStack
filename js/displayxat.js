function displayXat(divId) {
    var divs = document.querySelectorAll('div[id^="xat"]');
    divs.forEach(function(div) {
        if (div.id === divId) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}
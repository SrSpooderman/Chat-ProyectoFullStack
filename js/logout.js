function logout(){
    sessionStorage.removeItem("ClauSession")
    sessionStorage.removeItem("ClauMail");
    window.location.href = "/Login.html";
}
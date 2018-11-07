// Select the 
var navbar = document.querySelector(".wrapper");
// add the following html after the opening/begin of the div with class wrapper
navbar.insertAdjacentHTML("afterbegin", "<nav id='navbar'><div id='sportifyLogo'>SPORTIFY</div><ul><li><a href='index.html'>HOME</a></li><li><a href='learnMore.html'>LEARN MORE</a></li><li><a href='about.html'>ABOUT</a></li><li><a id='registerBtn' href='register.html'>REGISTER</a></li><li><a id='loginBtn' class='login' href='login.html'>LOG IN</a></li><li><a id='logoutBtn' href='index.html'>LOG OUT</a></li></ul></nav>");

var sportifyLogo = document.getElementById("sportifyLogo");
sportifyLogo.addEventListener("click", function(){
    document.location.href = "index.html";
})
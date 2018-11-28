if(!JSON.parse(localStorage.getItem("currentUser"))){
    currentUser = [];
}
else{
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var users = JSON.parse(localStorage.getItem("users"));
}
// Select the wrapper div
var navbar = document.querySelector(".wrapper");
// add the following html after the opening/begin of the div with class wrapper
navbar.insertAdjacentHTML("afterbegin", "<nav id='navbar'><div id='sportifyLogo'>SPORTIFY</div><ul><li><a id='userProfile' href='userProfile.html'>USER PROFILE</a></li><li><a id='createEvent' href='createEvent.html'>CREATE EVENT</a></li><li><a id='eventCatalogue' href='eventCatalogue.html'>EVENT CATALOGUE</a></li><li><a id='registerBtn' href='register.html'>REGISTER</a></li><li><a id='loginBtn' class='login' href='login.html'>LOG IN</a></li><li><a id='logoutBtn' href='index.html'>LOG OUT</a></li></ul></nav>");
// select elements to manipulate
var sportifyLogo = document.getElementById("sportifyLogo");
var logoutBtn = document.getElementById("logoutBtn");
// check if user is logged in
if(currentUser){
    // if he is logged in and clicks on logo -> redirect him to eventCatalogue.html
    sportifyLogo.addEventListener("click", function(){
        document.location.href = "eventCatalogue.html";
    })
}
else{
    // if he is not logged in -> redirect him to index.html
    sportifyLogo.addEventListener("click", function(){
        document.location.href = "index.html";
    })
}


// delete current user from local storage, when logout is clicked and redirect him to index.html
logoutBtn.addEventListener("click", function(){
            localStorage.removeItem("currentUser");
            document.location.href = "index.html";
})



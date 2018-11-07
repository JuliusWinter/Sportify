// Set a timer that redirects you to login.html after 10 sec
setTimeout(function(){
    localStorage.removeItem("currentUser")
    window.location.href = "login.html";
   }, 3000);

// Get Current User from localStorage
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
// Set HTML Paragraph to personalized welcome message
document.getElementById("welcomeMessage").innerHTML = "Hello " + currentUser[0].firstName + ", thank you for choosing Sportify";

// Set a countdown from 10sec to 0, that manipulates the html and displays the countdown
var timleft = 3;
setInterval(function(){
    timeleft = timleft --;
    document.getElementById("countdowntimer").innerHTML = timeleft;
}, 1000)

    


//Get the users Object from the local Host and update users array
var users = JSON.parse(localStorage.getItem("users"));

//Select Button
var submit = document.getElementById('submit');

//On click run a function
submit.onclick = function(){
    //safe what ever is inside the input fields
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // iterate over users array
    for(var i = 0; i < users.length; i++){
    //check if the input equals the credentials and change
    if(userName == users[i].userName && password == users[i].password){
        document.getElementById("loginResult").innerHTML = "Yeah, your credentials are right!!!";
        document.location.href = "register.html";
    }
    //If credentials not match show error message
    else{
        document.getElementById("loginResult").innerHTML = "Oops, username or password is wrong...try again!!!"
    }
    }
};

//




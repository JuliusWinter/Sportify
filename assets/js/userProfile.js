//User first and last name entered into header via userName
var users = JSON.parse(localStorage.getItem("users"));
// get current user from local storage
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
// get current user from local storage
var events = JSON.parse(localStorage.getItem("events"));

// select anchor tags that should be manipulated
var userProfile = document.querySelector("#userProfile");
var createEvent = document.querySelector("#createEvent");
var eventCatalogue = document.querySelector("#eventCatalogue");
var learnMore = document.querySelector("#learnMore");
var about = document.querySelector("#about");
var registerBtn = document.querySelector("#registerBtn");
var loginBtn = document.querySelector("#loginBtn");
var logoutBtn = document.querySelector("#logoutBtn");
// check if a user is logged in
if(currentUser){
    userProfile.style.display = "inline";
    createEvent.style.display = "inline";
    eventCatalogue.style.display = "inline";
    learnMore.style.display = "none";
    about.style.display = "none";
    registerBtn.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
}
else{
    document.location.href = "login.html";
}

var userName = document.getElementById("localUserName");
var userGender = document.getElementById("currentUserGender");
var userSlogan = document.getElementById("currentUserSlogan");

    for(var i = 0; i < users.length; i++){
      if(currentUser[0] === users[i].ID){
// CHANGE: FOR LOOP OVER USERS ARRAY --> MATCH WITH CURRENTUSER[0] === USERS[i].ID
// Access first name of first User and last name of first User
userName.innerHTML = users[i].userName + " is in the game";
// this element will come from the user's gender
userGender.innerHTML = "Gender: " + users[i].gender;
// this element will come from user typing in slogan
var slogan = users[i].slogan;
if ( slogan == "") {
    txt = "Create a slogan in the profile edit page!";
} else {
    txt = slogan;
}
userSlogan.innerHTML = txt;
}
}

function createHTML (event) {
    return "<li class='eventItem "+event.sportType+"' id='"+event.eventID+"'name='"+event.location.formatted_address+"'>" +
            "<div class='eventContainer'>" +
                  "<div class='upperInfo'>" +
                          "<div class='flexDate'>"+
                                  "<div class='box date'>"+event.date.month.short + " " + event.date.date+"</div>"+
                                  "<div class='box day'>"+event.date.day.short+"</div>"+
                                  // "<div class='box date'>NOV 30</div>"+
                                  // "<div class='box day'>THU</div>"+
                          "</div>"+
                          "<div class='middleEventInfo'>"+
                                  "<div class='box eventName'><a class='linkEventPage' name='"+event.eventID+"'>"+event.name+"</a></div>"+
                                  "<div class='timeLocation'>"+
                                          "<div class='time box'>"+event.time+"</div>"+
                                          "<div class='dot box'>·</div>"+
                                          // Adjust location --> display name
                                          "<div class='location box loc'>"+event.location.formatted_address+"</div>"+
                                          "<div class='sportEventType'>"+
                                                  "<div class='sportType box'>"+event.sportType+"</div>"+
                                                  "<div class='dot box'>·</div>"+
                                                  "<div class='eventType box'>"+event.type+"</div>"+
                                          "</div>"+
                                  "</div>"+
                          "</div>"+
                  "</div>"+
                  "<div class='lowerInfo'>"+
                          "<div class='buttonGroup'>"+
                                  "<div class='attendBtnDiv'>"+
                                          "<button class='box attend eventBtn' name='"+event.eventID+"'>attend</button>"+
                                  "</div>"+
                                  "<div class='unAttendBtnDiv'>"+
                                          "<button class='box unattend eventBtn hideElement' name='"+event.eventID+"'>unattend</button>"+
                                  "</div>"+
                                  "<div class='interestedBtnDiv'>"+
                                          "<button class='box interested eventBtn' name='"+event.eventID+"'>interested</button>"+
                                  "</div>"+
                                  "<div class='unInterestedBtnDiv'>"+
                                          "<button class='box notinterested eventBtn hideElement' name='"+event.eventID+"'>no interest</button>"+
                                  "</div>"+
                          "</div>"+
                          "<div class='eventDetails'>"+
                                  "<div class='maxAttendees'>"+
                                          "<div class='spotsLeft box'>Places left: <span class='capacity' id='"+event.eventID+"'> "+ (event.maxPart - event.attendees.length)+"</span></div>"+
                                  "</div>"+
                                  "<div class='dot box'>·</div>"+
                                  "<div class='difficultyLvlDiv'>"+
                                          "<div class='box difficulty'>Difficulty: "+event.difficulty+"</div>"+
                                  "</div>"+
                                  "<div class='dot box'>·</div>"+
                                  "<div class='price'>"+
                                          "<div class='box priceTag'><span class='priceSpan'>"+event.price+"</span> kr.</div>"+
                                  "</div>"+
                          "</div>"+
                  "</div>"+
          "</div>"+
        "</li>"
}

//only create event catalogue if events.length > 0
if (events) {
    var content = "";
    function todayDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) {dd = '0'+dd} 
        if(mm<10) {mm = '0'+mm} 
        today = yyyy + '-' + mm + '-' + dd;
        return today
    }
    
    for(var i=0; i<events.length; i++){
        var eligble = false;
        for(var j=0; j<events[i].attendees.length; j++){
            if(currentUser[0] == events[i].attendees[j]) { 
                eligble = true;    
            }
        }
        for(var k=0; k<events[i].interested.length; k++){
            if(currentUser[0] == events[i].interested[k]) { 
                eligble = true;    
            }
        }
        if (eligble) {
            events[i].date >= todayDate()
            content += createHTML(events[i]);
        }
    }
    document.getElementById('upcomingEventItems').innerHTML = content;
}

//set variables for button ID's
var btnUpcoming = document.getElementById("upcomingEventsBtn");
var btnPrevious = document.getElementById("previousEventsBtn");
var btnOwn = document.getElementById("ownEventsBtn");
var btnAll = document.getElementById('allEventsBtn')
                                                        
//set variable for DIV ID's
var upEventsDIV = document.getElementById("upcomingEvents");
var prevEventsDIV = document.getElementById("previousEvents");
var ownEventsDIV = document.getElementById("ownEvents");
var allEventsDIV = document.getElementById('allEvents');

//function for first button in upcoming events
btnUpcoming.addEventListener("click", function(){
//DIV is set to display 'none' in userProfileStyle.css
    if (upEventsDIV.style.display == "none") {
        upEventsDIV.style.display = "inline";
        prevEventsDIV.style.display = "none";
        ownEventsDIV.style.display = "none";
        allEventsDIV.style.display = "none";

    } else if (upEventsDIV.style.display = "inline") {
        upEventsDIV.style.display = "none";
        prevEventsDIV.style.display = "none";
        ownEventsDIV.style.display = "none";
        allEventsDIV.style.display = "none";
    }
})

//identical function runs for past events DIV
btnPrevious.addEventListener("click", function() {
    if (prevEventsDIV.style.display == "none") {
        upEventsDIV.style.display = "none";
        prevEventsDIV.style.display = "inline";
        ownEventsDIV.style.display = "none";
        allEventsDIV.style.display = "none";

    } else if (prevEventsDIV.style.display == "inline") {
        upEventsDIV.style.display = "none";
        prevEventsDIV.style.display = "none";
        ownEventsDIV.style.display = "none";
        allEventsDIV.style.display = "none";
    }
})

btnOwn.addEventListener("click", function(){
    if (ownEventsDIV.style.display == "none") {
        upEventsDIV.style.display = "none";
        prevEventsDIV.style.display = "none";
        ownEventsDIV.style.display = "inline";
        allEventsDIV.style.display = "none";

    } else if (ownEventsDIV.style.display == "inline") {
        upEventsDIV.style.display = "none";
        prevEventsDIV.style.display = "none";
        ownEventsDIV.style.display = "none";
        allEventsDIV.style.display = "none";
    }
})

btnAll.addEventListener("click", function(){
    if (allEventsDIV.style.display == "none") {
        upEventsDIV.style.display = "none";
        prevEventsDIV.style.display = "none";
        ownEventsDIV.style.display = "none";
        allEventsDIV.style.display = "inline";

    } else if (allEventsDIV.style.display == "inline") {
        upEventsDIV.style.display = "none";
        prevEventsDIV.style.display = "none";
        ownEventsDIV.style.display = "none";
        allEventsDIV.style.display = "none";
    }
})


/////////////////////////////// LIST SEARCH FUNCTION BELOW \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// var searchEvents = document.getElementById("searchCreatedEvent");

// searchEvents.addEventListener("keyup", function(){
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("searchCreatedEvent");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("createdEventsList");
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//           li[i].style.display = "";
//       } else {
//           li[i].style.display = "none";
//       }
//   }
// });
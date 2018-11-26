//User first and last name entered into header via userName
var users = JSON.parse(localStorage.getItem("users"));
// get current user from local storage
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
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



 //get the event array, that contains all event objects, from local storage and parse it
 var events = JSON.parse(localStorage.getItem("events"));

 
 
 if(!JSON.parse(localStorage.getItem("currentEvent"))){
   var currentEvent=[];
 }
 else{
   localStorage.removeItem("currentEvent");
   var currentEvent=[];
 }
 




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
var userAwards = document.getElementById("userAward");

    for(var i = 0; i < users.length; i++){
      if(currentUser[0] === users[i].ID){
// CHANGE: FOR LOOP OVER USERS ARRAY --> MATCH WITH CURRENTUSER[0] === USERS[i].ID
// Access first name of first User and last name of first User
userName.innerHTML = users[i].userName + " is in the game";
// this element will come from the user's gender
userGender.innerHTML = "Gender: " + users[i].gender;
// this element will come from user typing in slogan
var slogan = users[i].slogan;
if ( slogan === undefined || slogan === "") {
    txt = "Create a slogan in the profile edit page!";
} else {
    txt = slogan;
}
userSlogan.innerHTML = txt;
//display message if no awards recieved

}
}



//set variables for button ID's
var btnCreated = document.getElementById("createdEventsBtn");
var btnAttending = document.getElementById("attendingEventsBtn");
var btnInterests = document.getElementById("interestedEventsBtn");
//set variable for DIV ID's
var createdEventsDIV = document.getElementById("userCreated");
var userAttendingDIV= document.getElementById("userAttending");
var interestedEventsDIV = document.getElementById("userInterest");  

// var btnUpcoming, btnPast, btnInterests, upcomingEventsDIV, pastEventsDIV, interestsDIV;
// btnUpcoming = document.getElementById("upcomingEventsBtn");
// btnPast = document.getElementById("pastEventsBtn");
// btnInterests = document.getElementById("interestsBtn");
// upcomingEventsDIV = document.getElementById("upcomingEvents");
// pastEventsDIV = document.getElementById("pastEvents");
// interestsDIV = document.getElementById("interests");

//function for first button in upcoming events
btnCreated.addEventListener("click", function(){
//DIV is set to display 'none' in userProfileStyle.css
    if (createdEventsDIV.style.display === "block") {
      //if clicked display 'block'
      createdEventsDIV.style.display = "none";
      //otherwise, diplay 'none'
    } else {
      // else if upcoming events DIV is set to 'block', remaining DIV's are display 'none'
      createdEventsDIV.style.display = "block";
      userAttendingDIV.style.display = "none";
      interestedEventsDIV.style.display = "none";
    }
});
//identical function runs for past events DIV
btnAttending.addEventListener("click", function() {
    if (userAttendingDIV.style.display === "block") {
      userAttendingDIV.style.display = "none";
    } else {
      userAttendingDIV.style.display = "block";
      interestedEventsDIV.style.display = "none";
      createdEventsDIV.style.display = "none";
    }
});
//identical function runs for interests
btnInterests.addEventListener("click", function(){
    if (interestedEventsDIV.style.display === "block") {
      interestedEventsDIV.style.display = "none";
    } else {
      interestedEventsDIV.style.display = "block";
      createdEventsDIV.style.display = "none";
      userAttendingDIV.style.display = "none";
    }
});


// var i = 0;
// var original = document.getElementById('event');

// function duplicate() {
//     var clone = original.cloneNode(true); // "deep" clone
//     clone.id = "event" + ++i;
//     // or clone.id = ""; if the divs don't need an ID
//     original.parentNode.appendChild(clone);
// }
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


//HTML generated based on following function 
function createHTMLinterests (event) {

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

//only show events where currentUser = value in interests array
if (events) {
  var content = "";
  //display events of certain condition that are stored in local storage in event catalogue
  //loop over array that contains all events that are stored in local storage// 
  for(var i=0; i<events.length; i++){
    //introduce variable for each individual event //
    var catItem = events[i];
    //create the current date and set it in the format that matches the format of event dates (yyyy-mm-dd)// 
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
//     //only display public events, do not display any private events
//     //if the event date is in the past, do not create elements in the event catalogue; hence, do not display event in catalogue//
//     for(var i = 0; i < users.length; i++){
//       if(currentUser[0] === users[i].ID){
//         var u = users[i];
//         var interests = u.intEvents;
//     if (catItem.date >= todayDate() && /*catItem.privacy == 'public' && */ catItem.eventID == interests) {
//     content += createHTMLinterests(events[i]);
//     }
  
//   }
//   document.getElementById('userInterestedEvents').innerHTML = content;
// }
// }
// }
// }
    //only display public events, do not display any private events
    //if the event date is in the past, do not create elements in the event catalogue; hence, do not display event in catalogue//
    var interest = catItem.interested;
    // console.log(interest);
    // console.log(currentUser[0]);
    for(var x = 0; x < interest.length; x++){
      // console.log(currentUser[0]);
      // for(var x = 0; x < interest.length; x++){
        // var q = interest[x];
if(interest[x] = currentUser){
        console.log(catItem);
        
}

    //          if(currentUser[0] === users[i].ID){
              //  var interest = catItem.interested;
              //  console.log(interest);
              //  for(var i = 0; i < users.length; i++){
    // if (catItem.date >= todayDate() && q === currentUser[0])  {
      content += createHTMLinterests(events[i]);
      // content.catItem.date.sort(function(a, b){return a - b});
      }
    }
    document.getElementById('userInterestedEvents').innerHTML = content;
  
  }




//HTML generated based on following function 
function createHTMLattending (event) {

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
//Only show created events by user and generate from createHTMLcreated
if (events) {
  var content = "";
  //display events of certain condition that are stored in local storage in event catalogue
  //loop over array that contains all events that are stored in local storage// 
  for(var i=0; i<events.length; i++){
    //introduce variable for each individual event //
    var catItem = events[i];
    //create the current date and set it in the format that matches the format of event dates (yyyy-mm-dd)// 
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
    //only display public events, do not display any private events
    //if the event date is in the past, do not create elements in the event catalogue; hence, do not display event in catalogue//
    if (catItem.date >= todayDate() && catItem.userID === currentUser[0]) {
    content += createHTMLattending(events[i]);
    }
  }
  document.getElementById('attendingEvents').innerHTML = content;
}



//HTML generated based on following function 
function createHTMLcreated (event) {

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
//Only show created events by user and generate from createHTMLcreated
if (events) {
  var content = "";
  //display events of certain condition that are stored in local storage in event catalogue
  //loop over array that contains all events that are stored in local storage// 
  for(var i=0; i<events.length; i++){
    //introduce variable for each individual event //
    var catItem = events[i];
    //create the current date and set it in the format that matches the format of event dates (yyyy-mm-dd)// 
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
    //only display public events, do not display any private events
    //if the event date is in the past, do not create elements in the event catalogue; hence, do not display event in catalogue//
    if (catItem.date >= todayDate() && catItem.userID === currentUser[0])  {
    content += createHTMLcreated(events[i]);
    // content.catItem.date.sort(function(a, b){return a - b});
    }

  }
  document.getElementById('createdEvents').innerHTML = content;
}


var redirectEventProfile = document.getElementsByClassName("linkEventPage");
 for (i = 0; i < redirectEventProfile.length; i++) {
    redirectEventProfile[i].addEventListener("click", function(e) {
        console.log(e);
        let eventID = e.target.name;
        currentEvent.push(eventID);
        localStorage.setItem("currentEvent", JSON.stringify(currentEvent));
        document.location.href = "eventProfile.html";
    });
  }


//Sort events by date, class name sortEvents given to button in user created events 

//class name of each div is box

/////////////////loop user interest array and match to eventID value
// //console logging users in loop and find intEvents
// for(var i = 0; i < users.length; i++){
//  if(currentUser[0] === users[i].ID){
//  var u = users[i];
//   var interests = u.intEvents;
//   console.log(interests);
//    //console logging users in loop and find event ID of all events
//    for(var ev = 0; ev < events.length; ev++){
//       var event = events[ev];

// console.log(event.name);

      
// //  for(var e = 0; e < userID.length; e++){
// //    console.log(userID);
// //  }
//  }
//  }}

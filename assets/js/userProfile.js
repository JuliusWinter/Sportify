//User first and last name entered into header via userName
var users = JSON.parse(localStorage.getItem("users"));
// get current user from local storage
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
// get current user from local storage
var events = JSON.parse(localStorage.getItem("events"));

if(!JSON.parse(localStorage.getItem("currentEvent"))){
    var currentEvent=[];
  }
  else{
    localStorage.removeItem("currentEvent");
    var currentEvent=[];
  }

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
                                  "<div class='box date'>"+event.date.month.short + "" + event.date.date+"</div>"+
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

// upcoming events
// //only create event catalogue if events.length > 0
function createUpEvents() {
  if (events) {
    var content = "";
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
        if (eligble && events[i].date.datePickerDate >= todayDate()) {
          content += createHTML(events[i]);
        }
    }
    if (content != "") {
    document.getElementById('upcomingEventItems').innerHTML = content;
    } else {
    document.getElementById('upcomingEventItems').innerHTML = 'No events matching'
    }
  }
}

// previous events
function createPrevEvents() {
  if (events) {
    var content = "";
      
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
      if (eligble && events[i].date.datePickerDate < todayDate()) {
        content += createHTML(events[i]);
      }
    }
    if (content != "") {
      document.getElementById('previousEventItems').innerHTML = content;
    } else {
      document.getElementById('previousEventItems').innerHTML = 'No events matching';
    }
  }
}

// own events
function createOwnEvents() {
  if (events) {
      var content = "";
      for(var i=0; i<events.length; i++){
          if(currentUser[0] == events[i].userID) { 
              content += createHTML(events[i]);
          }
      }
      if (content != "") {
        document.getElementById('ownEventItems').innerHTML = content;
      } else {
        document.getElementById('ownEventItems').innerHTML = 'No events matching';
      } 
  }
}

// all events
function createAllEvents() {
  if (events) {
    var content = "";
    for(var i=0; i<events.length; i++){
        var eligble = false;
        if(currentUser[0] == events[i].userID) { 
            eligble = true; 
        }
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
            content += createHTML(events[i]);
        }
    }
    if (content != "") {
      document.getElementById('allEventItems').innerHTML = content;
    } else {
      document.getElementById('allEventItems').innerHTML = 'No events matching';
    } 
  }
}

function buttonLogic() {
  // get all type of buttons by ClassNames
  var att = document.getElementsByClassName('attend');
  var unAtt = document. getElementsByClassName('unattend');
  var int = document.getElementsByClassName('interested');
  var notInt = document.getElementsByClassName('notinterested');
  var cap = document.getElementsByClassName('capacity');

  // set visibility of attend buttons when entering page and user attends or is interested
  // loop over events array
  for(var i=0; i < events.length; i++){
    for(var j=0; j < events[i].attendees.length; j++){
      for(var k=0; k < events[i].interested.length; k++){
        if(currentUser[0] !== events[i].attendees[j] && currentUser[0] !== events[i].interested[k]){
          att[i].classList.remove("hideElement");
          unAtt[i].classList.add("hideElement");
          int[i].classList.remove("hideElement");
          notInt[i].classList.add("hideElement");
        }
      }
    }
  }
  for (var i=0; i<events.length; i++) {
    // find events with attendees
    if (events[i].attendees.length) {
      // loop over attendees array
      for (var j=0; j<events[i].attendees.length; j++) {
        // check if currentUser is one of the attendees
        if (currentUser[0] === events[i].attendees[j]){
          att[i].classList.add("hideElement");
          unAtt[i].classList.remove("hideElement");
          int[i].classList.add("hideElement");
          notInt[i].classList.add("hideElement");
        }
      }
    }
  }
  // loop over the events array
  for (var i=0; i<events.length; i++) {
    // check if there are interested people
    if (events[i].interested) {
      // if yes, loop over interested array
      for (var j=0; j<events[i].interested.length; j++) {
        // check if our current user is one of the interested people
        if (currentUser[0] === events[i].interested[j]){
          att[i].classList.remove("hideElement");
          unAtt[i].classList.add("hideElement");
          int[i].classList.add("hideElement");
          notInt[i].classList.remove("hideElement");
        }
      }
    }
  }
    
  //attend button: add event listener functionality (push userID to attendees array of event and push eventID to attendedEvents array of user + change the visibility of the buttons)  
  //Alternative: load data-set into button as an atrribute (hence, insert the event object which applies to specific button into button and access needed properties that way) - Problem: could not parse the data-set
  for (var i=0; i<att.length; i++) {
    // console.log(att.length)
    att[i].addEventListener('click', function(e) {
      let event = e.target.name;
      for (var i=0; i<events.length; i++) {
        // check if the button ID equals the event ID AND the event is not fully booked
        if (event === events[i].eventID && events[i].attendees.length >= events[i].maxPart) {
          alert('Sorry, the event is booked out')
        }
        // check if the button ID equals the event ID AND if the event is not fully booked
        else if (event === events[i].eventID && events[i].attendees.length < events[i].maxPart) {
          for (var i=0; i<users.length; i++) {
            // loop over users array to find current user
            if (currentUser[0] === users[i].ID) {
              // push the event ID in attEvents array of user
              users[i].attEvents.push(event);
              // upload users array to local storage
              localStorage.setItem("users", JSON.stringify(users));
            }
          }
          // loop over events array
          for (var i=0; i<events.length; i++) {
            // find the respective event
            if (event === events[i].eventID) {
              // push the user ID of currentUser in attendees array
              events[i].attendees.push(currentUser[0]);
              // upload to local storage
              localStorage.setItem('events', JSON.stringify(events));
            }
          }
          // loop over users array
          for (i=0; i<users.length; i++) {
            // find current user in users array
            if (currentUser[0] === users[i].ID) {
              // remove the event ID from intEvents array of user object
              var intEventsIndex = users[i].intEvents.indexOf(event);
              if(intEventsIndex > -1){
                users[i].intEvents.splice(intEventsIndex, 1);
              }
              // upload to local storage
              localStorage.setItem("users", JSON.stringify(users));
            }
          }
          // loop over events array
          for (i=0; i<events.length; i++) {
            // find our respective event
            if (event === events[i].eventID) {
              // remove user ID from interested array of event object
              var interestedIndex = events[i].interested.indexOf(currentUser[0]);
              if(interestedIndex > -1){
                events[i].interested.splice(interestedIndex, 1);
              }
            // upload to local storage
            localStorage.setItem('events', JSON.stringify(events));
            }
          }

          // manipulate buttons accordingly
          att[event].classList.add("hideElement");
          unAtt[event].classList.remove("hideElement");
          int[event].classList.add("hideElement");
          notInt[event].classList.add("hideElement");

          //change places left
          var cap = document.getElementsByClassName('capacity')
          for (j=0; j<events.length; j++) {
            if (events[j].eventID == event) {
              for (i=0; i<cap.length; i++) {
                if (cap[i].id == events[j].eventID) {
                  cap[i].innerHTML = events[j].maxPart - events[j].attendees.length
                }
              }
            }
          }
        } 
      }    
    })
  }

  // loop over all unattend buttons and add event listener that on click removes
  // event id from atteEvents array in user object
  // and removes user id from attendees array in event object
  for (var i=0; i < unAtt.length; i++) {
    unAtt[i].addEventListener('click', function(e) {
      let event = e.target.name;
      // loop over users array
      for (var i=0; i<users.length; i++) {
        // find current user in users array
        if (currentUser[0] === users[i].ID) {
          // remove the event ID from attEvents array in users object
          var attEventsIndex = users[i].attEvents.indexOf(event);
          if(attEventsIndex > -1){
            users[i].attEvents.splice(attEventsIndex, 1);
          }
          // upload to local storage
          localStorage.setItem("users", JSON.stringify(users));
        }
      }
      // loop over events array
      for (var i=0; i<events.length; i++) {
        // find our event in events array
        if (event === events[i].eventID) {
          // delete the user ID from the attendees array in the event object
          var attendeesIndex = events[i].attendees.indexOf(currentUser[0]);
          if(attendeesIndex > -1){
            events[i].attendees.splice(attendeesIndex, 1);
          }
          // upload to local storage
          localStorage.setItem('events', JSON.stringify(events));
        }
      }
      // manipulate buttons to show only relevant buttons
      att[event].classList.remove("hideElement");
      unAtt[event].classList.add("hideElement");
      int[event].classList.remove("hideElement");
      notInt[event].classList.add("hideElement");

      //change places left
      var cap = document.getElementsByClassName('capacity')
        for (j=0; j<events.length; j++) {
          if (events[j].eventID == event) {
            for (i=0; i<cap.length; i++) {
              if (cap[i].id == events[j].eventID) {
                cap[i].innerHTML = events[j].maxPart - events[j].attendees.length
              }
            }
          }
        }
    })
  }

  // add an event listener to all interested buttons that on click
  // pushes the event ID to the intEvents array of our user object
  // AND pushes our user ID to the interested array of the events object
  // loop over all int buttons
  for (var i=0; i < int.length; i++) {
    // add an event listener to all of them
    int[i].addEventListener('click', function(e) {
      let event = e.target.name;
      // loop over the users array
      for (var i=0; i< users.length; i++) {
        // find our current user
        if (currentUser[0] === users[i].ID) {
          // push the event ID to intEvents array of user object
          users[i].intEvents.push(event);
          // upload to local storage
          localStorage.setItem("users", JSON.stringify(users));
        }
      }
      // loop over events array
      for (var i=0; i<events.length; i++) {
        // find our event
        if (event === events[i].eventID) {
          // push the user ID of current User to the interested array of the events object
          events[i].interested.push(currentUser[0]);
          // upload events array to local storage
          localStorage.setItem('events', JSON.stringify(events));
        }
      }
      // manipulate visability of respective buttons
      att[event].classList.remove("hideElement");
      unAtt[event].classList.add("hideElement");
      int[event].classList.add("hideElement");
      notInt[event].classList.remove("hideElement");
    })
  }

  // loop over all notInterested buttons and add event listener that on click removes
  // event id from intEvents array in user object
  // and removes user id from interested array in event object
  // loop over unInterested buttons
  for (var i=0; i < notInt.length; i++) {
    // add event click listener to each of them
    notInt[i].addEventListener('click', function(e) {
      let event = e.target.name;
      // loop over users array
      for (i=0; i<users.length; i++) {
        // find current user in users array
        if (currentUser[0] === users[i].ID) {
          // remove the event ID from intEvents array of user object
          var intEventsIndex = users[i].intEvents.indexOf(event);
          if(intEventsIndex > -1){
            users[i].intEvents.splice(intEventsIndex, 1);
          }
        // upload to local storage
        localStorage.setItem("users", JSON.stringify(users));
        }
      }
      // loop over events array
      for (i=0; i<events.length; i++) {
        // find our respective event
        if (event === events[i].eventID) {
          // remove user ID from interested array of event object
          var interestedIndex = events[i].interested.indexOf(currentUser[0]);
          if(interestedIndex > -1){
            events[i].interested.splice(interestedIndex, 1);
          }
          // upload to local storage
          localStorage.setItem('events', JSON.stringify(events));
        }
      }
      // manipulate button visability accordingly
      att[event].classList.remove("hideElement");
      unAtt[event].classList.add("hideElement");
      int[event].classList.remove("hideElement");
      notInt[event].classList.add("hideElement");
    })
  }
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

function getLocalStorageData() {
  //User first and last name entered into header via userName
  var users = JSON.parse(localStorage.getItem("users"));
  // get current user from local storage
  var events = JSON.parse(localStorage.getItem("events"));
}

//function for first button in upcoming events
btnUpcoming.addEventListener("click", function(){
  getLocalStorageData();
  if (upEventsDIV.style.display == "none") {
    upEventsDIV.style.display = "inline";
    prevEventsDIV.style.display = "none";
    ownEventsDIV.style.display = "none";
    allEventsDIV.style.display = "none";
} else if (upEventsDIV.style.display == "inline") {
    upEventsDIV.style.display = "none";
    prevEventsDIV.style.display = "none";
    ownEventsDIV.style.display = "none";
    allEventsDIV.style.display = "none";
}
  createUpEvents();
  buttonLogic();
})

//identical function runs for past events DIV
btnPrevious.addEventListener("click", function() {
  getLocalStorageData();
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
  createPrevEvents();
  buttonLogic();
})

btnOwn.addEventListener("click", function(){
  getLocalStorageData();
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
  createOwnEvents();
  buttonLogic();
})

btnAll.addEventListener("click", function(){
  getLocalStorageData();
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
  createAllEvents();
  buttonLogic();
})

// when the link (=click on name of event) to an event is clicked, the event id is pushed to the array currentEvent, stored in the local Storage and the user is redirected to the event Profile -> on the event Profile the Data gets filled out automatically based on the entry of the id in the currentEvent array
// Give the a tag a class
// select that a with document.getElementByClassName
// add an event listener to the a
// on click push the id of the event to an array called currentEvent
// upload that array to local storage
// redirect to eventProfile.html  
var redirectEventProfile = document.getElementsByClassName("linkEventPage");
for (i = 0; i < redirectEventProfile.length; i++) {
  redirectEventProfile[i].addEventListener("click", function(e) {
    let eventID = e.target.name;
    currentEvent.push(eventID);
    localStorage.setItem("currentEvent", JSON.stringify(currentEvent));
    document.location.href = "eventProfile.html";
  })
}

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
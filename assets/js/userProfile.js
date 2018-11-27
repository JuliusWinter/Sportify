// CHAPTER 0: Get data from local storage

//get users from local storage
var users = JSON.parse(localStorage.getItem("users"));
// get current user from local storage
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
// get current user from local storage
var events = JSON.parse(localStorage.getItem("events"));

//if currentEvent array is not existent in local storage, than create an empty array, else remove item from local storage and set array back
if(!JSON.parse(localStorage.getItem("currentEvent"))){
    var currentEvent=[];
} else{
    localStorage.removeItem("currentEvent");
    var currentEvent=[];
}


// CHAPTER 1: Initialize navigation bar

//select anchor tags that should be manipulated
var userProfile = document.querySelector("#userProfile");
var createEvent = document.querySelector("#createEvent");
var eventCatalogue = document.querySelector("#eventCatalogue");
var learnMore = document.querySelector("#learnMore");
var about = document.querySelector("#about");
var registerBtn = document.querySelector("#registerBtn");
var loginBtn = document.querySelector("#loginBtn");
var logoutBtn = document.querySelector("#logoutBtn");

//check if a user is logged in
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


// CHAPTER 2: Setup basic layout of profile page with individual data 

//select elements in HTML that should be manipulated
var userName = document.getElementById("localUserName");
var userGender = document.getElementById("currentUserGender");
var userSlogan = document.getElementById("currentUserSlogan");
//loop over user, get relevant data and display it in HTML
for(var i = 0; i < users.length; i++){
  if(currentUser[0] === users[i].ID){
    // get name of user and display in HTML
    userName.innerHTML = users[i].userName + " is in the game";
    // get gender of user and display in HTML
    userGender.innerHTML = "Gender: " + users[i].gender;
    // set slogan for each user (empty by default)
    var slogan = users[i].slogan;
    if ( slogan == "") {
      txt = "Create a slogan in the profile edit page!";
    } else {
      txt = slogan;
    }
    userSlogan.innerHTML = txt;
  }
}


// CHAPTER 2: Create HTML elements for events

//function that creates the structure of the HTML for displaying events in the event catalogue; approach: create a list item for each event and attach it to an unordered list, that exists in the HTML
function createHTML (event) {
    return "<li class='eventItem "+event.sportType+"' id='"+event.eventID+"'name='"+event.location.formatted_address+"'>" +
            "<div class='eventContainer'>" +
                  "<div class='upperInfo'>" +
                          "<div class='flexDate'>"+
                                  "<div class='box date'>"+event.date.month.short + "" + event.date.date+"</div>"+
                                  "<div class='box day'>"+event.date.day.short+"</div>"+
                          "</div>"+
                          "<div class='middleEventInfo'>"+
                                  "<div class='box eventName'><a class='linkEventPage' name='"+event.eventID+"'>"+event.name+"</a></div>"+
                                  "<div class='timeLocation'>"+
                                          "<div class='time box'>"+event.time+"</div>"+
                                          "<div class='dot box'>·</div>"+
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

//create the current date and set it in the format that matches the format of event dates (yyyy-mm-dd)
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

function createAllEvents() {
  //only create event catalogue if events array length > 0
  if (events) {
    //introduce a variable being an empty string
    var content = "";
    //loop over array that contains all events that are stored in local storage
    for(var i=0; i<events.length; i++){
        //introduce a variable that is by default false
        var eligble = false;
        //if current user is creator of an event, set the variable eligblie to true
        if(currentUser[0] == events[i].userID) { 
            eligble = true; 
        }
        //if current user is an attendee of event, set the variable eligblie to true
        for(var j=0; j<events[i].attendees.length; j++){
            if(currentUser[0] == events[i].attendees[j]) { 
                eligble = true;    
            }
        }
        //if current user is interested in event, set the variable eligblie to true
        for(var k=0; k<events[i].interested.length; k++){
            if(currentUser[0] == events[i].interested[k]) { 
                eligble = true;    
            }
        }
        //if event triggered and eligble = true and event date is in future, create the HTML for the event 
        if (eligble && events[i].date.datePickerDate >= todayDate()) {
            content += createHTML(events[i]);
        }
    }
    //if an HTML was created, attach the variable to the unordered list, which is existent in the HTML and contains all events meant to be displayed
    if (content != "") {
      document.getElementById('allEventItems').innerHTML = content;
    //if no event matchin and thus no HTML was created, display a message
    } else {
      document.getElementById('allEventItems').innerHTML = 'No events matching';
    } 
  }
}


// CHAPTER 3: Attend, unattend, interested, not interested button visbility and logic

function buttonLogic() {
// get all types of buttons and the capacity display div of each event by ClassNames
  var att = document.getElementsByClassName('attend');
  var unAtt = document. getElementsByClassName('unattend');
  var int = document.getElementsByClassName('interested');
  var notInt = document.getElementsByClassName('notinterested');

  // set visibility of attend buttons when entering page and user attends or is interested
  // loop over events array, events attendees and event interested array and only display attend button and interested button if current user not included in those arrays
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

  // loop over events array, events attendees array and only display unattend button if current user included in attendees array 
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

  // loop over events array, events interested array and only display unattend button if current user included in interested array 
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


// CHAPTER 4: Display of div containing events and function activation

//set variables for button ID
var btnAll = document.getElementById('allEventsBtn')                                  
//set variable for div ID
var allEventsDIV = document.getElementById('allEvents');

//update data that is used in function 
function getLocalStorageData() {
  //User first and last name entered into header via userName
  var users = JSON.parse(localStorage.getItem("users"));
  // get current user from local storage
  var events = JSON.parse(localStorage.getItem("events"));
}

//attach all functions to all events button
btnAll.addEventListener("click", function(){
  getLocalStorageData();
  //on click of button: display div if not displayed; hide div if display
  if (allEventsDIV.style.display == "none") {
    allEventsDIV.style.display = "inline";
  } else if (allEventsDIV.style.display == "inline") {
    allEventsDIV.style.display = "none";
  }
  //attach HTML creation function on click of button
  createAllEvents();
  //attach the button logic
  buttonLogic();
})


// CHAPTER 5: Redirect to individual event page

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
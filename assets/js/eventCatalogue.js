//get the event array from local storage//
var events = JSON.parse(localStorage.getItem("events"));

//display the events in the course catalogue//
// for(var i = 0; i < events.length; i++) {
//   var catItem = events[i];
//   var divContainer = document.createElement('DIV');
//   var att1 = document.createAttribute('class');
//   att1.value = 'event';
//   divContainer.setAttributeNode(att1);
//   var att2 = document.createAttribute('id');
//   att2.value = catItem.eventID;
//   divContainer.setAttributeNode(att2);
  
//   for(var prop in catItem) {
//     var x = document.createElement('p');
//     x.setAttribute('class', prop);
//     var xContent = document.createTextNode(catItem.prop.value);
//     // if (x.className !== catItem.eventID) {
//     x.appendChild(xContent);
//     divContainer.appendChild(x);
//     }
//   var ec = document.getElementById('catalogueItems');
//   ec.appendChild(divContainer);
// }

//  this.eventID = _eventID;
// this.type = _type;
// this.privacy = _privacy;
// this.name = _name;
// this.date = _date;
// this.time = _time;
// this.sportType = _sportType;
// this.description = _description;
// this.difficulty = _difficulty;
// this.maxPart = _maxPart;
// this.frequency = _frequency;
// this.location = _location;
// this.price = _price;

for(var i = 0; i < events.length; i++) {
  var catItem = events[i];
  if (catItems.date >= );
  var divContainer = document.createElement('DIV');
  divContainer.setAttribute('class', 'event');
  divContainer.setAttribute('id', catItem.eventID);

  var naming = document.createElement('DIV');
  naming.setAttribute('class', 'name');
  var namingContent = document.createTextNode(events[i].name);
  naming.appendChild(namingContent);

  var sportType = document.createElement('DIV');
  sportType.setAttribute('class', 'sportType');
  var sportTypeContent = document.createTextNode(events[i].sportType);
  sportType.appendChild(sportTypeContent);

  var type = document.createElement('DIV');
  type.setAttribute('class', 'type');
  var typeContent = document.createTextNode('Event Type: ' + events[i].type);
  type.appendChild(typeContent);

  var date = document.createElement('DIV');
  date.setAttribute('class', 'date');
  var dateContent = document.createTextNode('Date: ' + events[i].date);
  date.appendChild(dateContent);

  var time = document.createElement('DIV');
  time.setAttribute('class', 'time');
  var timeContent = document.createTextNode('Time: ' + events[i].time);
  time.appendChild(timeContent);

  var difficulty = document.createElement('DIV');
  difficulty.setAttribute('class', 'difficulty');
  var difficultyContent = document.createTextNode('Difficulty Level: ' + events[i].difficulty);
  difficulty.appendChild(difficultyContent);

  var maxPart = document.createElement('DIV');
  maxPart.setAttribute('class', 'maxPart');
  var maxPartContent = document.createTextNode('Max. participants: ' + events[i].maxPart);
  maxPart.appendChild(maxPartContent);

  var frequency = document.createElement('DIV');
  frequency.setAttribute('class', 'frequency');
  var frequencyContent = document.createTextNode('Frequency: ' + events[i].frequency);
  frequency.appendChild(frequencyContent);

  var price = document.createElement('DIV');
  price.setAttribute('class', 'price');
  var priceContent = document.createTextNode('Price: ' + events[i].price + ' kr.');
  price.appendChild(priceContent);

  //add all previously created sub divs to the divContainer
  divContainer.appendChild(naming);
  divContainer.appendChild(sportType);
  divContainer.appendChild(type);
  divContainer.appendChild(difficulty);
  divContainer.appendChild(date);
  divContainer.appendChild(time);
  divContainer.appendChild(frequency);
  divContainer.appendChild(price);
  divContainer.appendChild(maxPart);
  
  //add all divContainers to event catalogue (=div('catalogueItems') in HTML
  var element = document.getElementById('catalogueItems');
  element.appendChild(divContainer);
}

// get current user from local storage
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
// get events from local storage
var events = JSON.parse(localStorage.getItem("events"))
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
  document.location.href = "index.html";
}

//define a function that searches for event categories and displays only applicable events//
function categorySearchFunction (){
  //declare variables - getting values from search box//
  let searchInputCat = document.getElementById('userCategoryInput').value.toUpperCase();
  //Declare variables - getting values from the div elements
  let catItems = document.getElementById('catalogueItems');
  let events = catItems.getElementsByClassName('event');

  //loop through the divs to search for elements, and hide those that do not match the search query//
  for (var i=0; i<events.length; i++){
    var cat = events[i].getElementsByClassName('sportCategory');
    
    if(cat[0].innerHTML.toUpperCase().includes(searchInputCat)){
      events[i].style.display ="";
    }else{
      events[i].style.display ="none";
    }
  }
}

//define a function that searches for event categories and displays only applicable events//
function locationSearchFunction (){
  //declare variables - getting values from search box//
  let searchInputLoc = document.getElementById('userLocationInput').value.toUpperCase();
  //Declare variables - getting values from the div elements
  let catItems = document.getElementById('catalogueItems');
  let events = catItems.getElementsByClassName('event');

  //loop through the divs to search for elements, and hide those that do not match the search query//
  for (var i=0; i<events.length; i++){
    var loc = events[i].getElementsByClassName('city');
    
    if(loc[0].innerHTML.toUpperCase().includes(searchInputLoc)){
      events[i].style.display ="";
    }else{
      events[i].style.display ="none";
    }
  }
}

//dropdown sport category selection 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


//create an function that creates a div, including a checkbox and an individual label for each array value

var sports = ['American Football', 'Athletics','Badminton','Basketball','Boxing ','Canoeing','Cricket','Cross-Fit','Cycling ','Dancing','Darts','Disability Sports','Diving','Fitness-Training','Football','Golf','Handball','Hiking','Hockey','Ice Hockey','Longboarding','Mixed Martial Arts','Modern Pentathlon','Motor Sports','Netball','Parkour','Rowing','Rugby','Running','Sailing','Shooting','Skateboarding','Skiing','Snooker','Snowboarding','Squash','Surfing','Swimming','Table Tennis','Tai Chi','Tennis','Triathlon','Tricking','Ultimate Frisbee','Volleyball','Weightlifting','Winter Sports','Wrestling','Yoga'];

for(var i = 0; i < sports.length; i++) {
    var opt = sports[i];
    var div = document.createElement('DIV');
    div.setAttribute('class', 'checkboxCat');
    div.setAttribute('id', sports[i]);
    div.setAttribute('value', sports[i]);
    var para = document.createElement("INPUT");
    para.setAttribute("type", "checkbox",);
    para.setAttribute('id', sports[i]);
    var lab = document.createElement('LABEL'); 
    lab.setAttribute('for', sports[i]);
    lab.innerHTML = sports[i];
    var element = document.getElementById("content");
    element.appendChild(div);
    element.appendChild(para);
    element.appendChild(lab);
}

//define a function that searches for event categories and displays only applicable events//
function catSearch (){
  //declare variables - getting values from search box//
  let searchInputCat = document.getElementById('categorySearch').value.toUpperCase();
  //Declare variables - getting values from the div elements
  let catItems = document.getElementById('content');
  let category = document.getElementsByClassName('checkboxCat');
    
    if(cat[i].toUpperCase().includes(searchInputCat)){
      category[i].style.display ="";
    }else{
      category[i].style.display ="none";
    }
  }


// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }

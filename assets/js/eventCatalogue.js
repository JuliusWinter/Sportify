//get the event array from local storage//
var events = JSON.parse(localStorage.getItem("events"));
//display the events in the course catalogue//
for(var i = 0; i < events.length; i++) {
  var catItem = events[i];
  var divContainer = document.createElement('DIV');
  div.setAttribute('class', 'event');
  div.setAttribute('id', events[i].eventID);
  
  var type = document.createElement('DIV');
  type.setAttribute('class', 'type');
  var typeContent = document.createTextNode(events[i].type);
  type.appendChild(typeContent);

  var name = document.createElement('DIV');
  name.setAttribute('class', 'name');
  var nameContent = document.createTextNode(events[i].name);
  name.appendChild(nameContent);

  var date = document.createElement('DIV');
  date.setAttribute('class', 'date');
  var dateContent = document.createTextNode(events[i].date);
  date.appendChild(dateContent);

  var date = document.createElement('DIV');
  time.setAttribute('class', 'time');
  var timeContent = document.createTextNode(events[i].time);
  time.appendChild(timeContent);
  
  var date = document.createElement('DIV');
  date.setAttribute('class', 'date');
  var dateContent = document.createTextNode(events[i].date);
  date.appendChild(dateContent);

  var time = document.createElement('DIV');
  time.setAttribute('class', 'time');
  var timeContent = document.createTextNode(events[i].time);
  time.appendChild(timeContent);

  var sportType = document.createElement('DIV');
  sportType.setAttribute('class', 'sportType');
  var sportTypeContent = document.createTextNode(events[i].sportType);
  sportType.appendChild(sportTypeContent);

  var difficulty = document.createElement('DIV');
  difficulty.setAttribute('class', 'difficulty');
  var difficultyContent = document.createTextNode(events[i].difficulty);
  difficulty.appendChild(difficultyContent);

  var maxPart = document.createElement('DIV');
  maxPart.setAttribute('class', 'maxPart');
  var maxPart = document.createTextNode(events[i].maxPart);
  maxPart.appendChild(maxPartContent);

  var frequency = document.createElement('DIV');
  frequency.setAttribute('class', 'frequency');
  var frequencyContent = document.createTextNode(events[i].frequency);
  frequency.appendChild(frequencyContent);

  var price = document.createElement('DIV');
  price.setAttribute('class', 'price');
  var timeContent = document.createTextNode(events[i].time);
  time.appendChild(timeContent);

  //add all previously created sub divs to the divContainer
  var x = getElementById(events[i].eventID);
  x.appendChild(type);
  
  //add all divContainers to event catalogue (=div('catalogueItems') in HTML
  var element = document.getElementById('catalogueItems');
  element.appendChild(divContainer);
  
}

// class Event {
//   constructor(_eventID, _type, _privacy, _name, _date, _time, _sportType, _description, _difficulty, _maxPart, _frequency, _location, _price){
//       this.eventID = _eventID;
//       this.type = _type;
//       this.privacy = _privacy;
//       this.name = _name;
//       this.date = _date;
//       this.time = _time;
//       this.sportType = _sportType;
//       this.description = _description;
//       this.difficulty = _difficulty;
//       this.maxPart = _maxPart;
//       this.frequency = _frequency;
//       this.location = _location;
//       this.price = _price;
//       }
//   }

// {/* <div class='event'>  */}
//             <div class='link'>
//                   <a href="#eventPage">Yoga Course @Amager Strand</a>
//             </div>
//             <div class='sportCategory'>Yoga</div>
//             <div class='type'>Course</div>
//             <div class='date'>21.11.2018</div>
//             <div class='startTime'>18:00</div>
//             <div class='duration'>2h00m</div>
//             <div class='city'>Copenhagen</div>
//             <div class='district'>Amagerbro</div>
//             <div class='street'>XYZ</div>
//             <div class='price'>5 kr.</div>
//             <div class='capacity'>
//                   <span class="status"></span>
//                   5 spots available
//             </div>
//             <button>Event Page</button>
//       </div>



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

  //loop through the divs to search for elements, and hide those that do not match the search query//
  for (var i=0; i<category.length; i++){
    var cat = category[i].value;
    
    if(cat[i].toUpperCase().includes(searchInputCat)){
      category[i].style.display ="";
    }else{
      category[i].style.display ="none";
    }
  }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

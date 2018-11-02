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

var select = document.getElementById("content"); 
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

// //define a function that searches for event categories and displays only applicable events//
// function catSearch (){
//   //declare variables - getting values from search box//
//   let searchInputCat = document.getElementById('categorySearch').value.toUpperCase();
//   //Declare variables - getting values from the div elements
//   let catItems = document.getElementById('content');
//   let category = catItems.getElementsByClassName('checkboxCat');

//   //loop through the divs to search for elements, and hide those that do not match the search query//
//   for (var i=0; i<category.length; i++){
//     var cat = category[i].value;
    
//     if(cat[i].toUpperCase().includes(searchInputCat)){
//       category[i].style.display ="";
//     }else{
//       category[i].style.display ="none";
//     }
//   }
// }

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

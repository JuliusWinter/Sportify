<<<<<<< HEAD
var events = "";


// function myFunction() {
//   // Declare variables 
//   var input, filter, table, tr, td, i;
//   input = document.getElementById("userInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("currentCatalogue");
//   tr = table.getElementsByTagName("tr");

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     } 
//   }
// }
=======
//define a function that searches for event categories and displays only applicable events//
function categorySearchFunction (){
  //declare variables - getting values from search box//
  var searchInputCat = document.getElementById('userCategoryInput').value.toUpperCase();
  //Declare variables - getting values from the div elements
  var catItems = document.getElementById('catalogueItems');
  var events = catItems.getElementsByClassName('event');

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
  var searchInputLoc = document.getElementById('userLocationInput').value.toUpperCase();
  //Declare variables - getting values from the div elements
  var catItems = document.getElementById('catalogueItems');
  var events = catItems.getElementsByClassName('event');

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
>>>>>>> 41af3c56b5aca596753fdb939f4fd1b680b10413

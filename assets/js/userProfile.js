function searchCatalogueTable() {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("tableInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("userEventsTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }


// function togglePastEvents() {
//   var show = document.getElementById("pastEvents");
//   if (show.style.display === "none") {
//     show.style.display = "block";
//   } else {
//     show.style.display = "none";
//   }
// }


//toggle function applied to buttons to hide/show div's when div ID is placed into function on HTML
// function togglePanes(id) {
//   var x = document.getElementById(id);
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

var userProfileDIV = {};
function togglePanes(id) {
    if (document.getElementById) {
        var x = document.getElementById(id);
        userProfileDIV[id] = (userProfileDIV[id]) ? false : true;
        //close others
        for (var div in userProfileDIV){
            if (userProfileDIV[div] && div != id){
                document.getElementById(div).style.display = 'none';
                userProfileDIV[div] = false;
            }
        }
        x.style.display = (x.style.display == 'block' ? 'none' : 'block');
    }
}

//User first and last name entered into header via userName
var users = JSON.parse(localStorage.getItem("users"));

//var firstName = users["firstName"];

//var test = localStorage.getItem("users");
document.getElementById("userName").innerHTML = users["firstName"];


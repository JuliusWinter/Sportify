function myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
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


  
  function toggleUpcomingEvents() {
    var element = document.getElementById("upcomingEvents");
    element.classList.toggle("mystyle");
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
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
function togglePastEvents() {
  var element = document.getElementById("pastEvents");
  element.classList.toggle("mystyle");
}
function toggleInterests() {
  var show = document.getElementById("interests");
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}
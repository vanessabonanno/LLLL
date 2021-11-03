function myFunction(id) {
  var x = document.getElementById(id);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//This is experimental//
function toggle_rel(id) {
  var x = document.getElementById(id);
  x.style.color= "pink";
}
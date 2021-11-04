//this function toggles the display of the columns for each article
//still has an issue with not working on first click
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//this function allows stuff to be added and removed below the checkboxes in the metadataviewer.
//we need another function that can automatically write the html code according to which subheadings we want
function test1(el){
	if (!$.trim($('div#subheadings').html())) {
    // if div with id="subheadings" is empty, your code goes here
		var obj = {
		content : "<ul><li>coffee</li><li>tea</li></ul>'"
		};
		$('#subheadings').append(obj.content);
	}
	else {
		document.getElementById("subheadings").innerHTML = "";
		}
}

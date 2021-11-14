//this function toggles the display of the columns for each article
//still has an issue with not working on first click
//id is the article column itself; id2 is the subheadings group that appears in the metadataviewer
// currently you have to mannual name all the ids for the correct boxes. 
//It would be good to have a way to make it standard: article1, article 2, article 3 then dynamically fill the place holders for title, subheadings, and mentions dynamically
function myFunction(id, id2) {
  var x = document.getElementById(id);
  var y = document.getElementById(id2);
  if (x.style.display === "block") {
    x.style.display = "none";
	y.style.display = "none";
  } else {
    x.style.display = "block";
	y.style.display= "block";
  }
  
}

//this function allows stuff to be added and removed below the checkboxes in the metadataviewer.
//we need another function that can automatically write the html code according to which subheadings we want
function test1(el){
	if (!$.trim($('div#subheadings').html())) {
    // if div with id="subheadings" is empty, your code goes here
		var obj = {
		content : "<ul><li><a style = 'color: red' href='https://en.wikipedia.org/wiki/Coffee'>coffee</a></li><li>tea</li></ul>"
		};
		$('#subheadings').append(obj.content);
	}
	else {
		document.getElementById("subheadings").innerHTML = "";
		}
}

var all = $("mention_org").data("all"); 
	console.log(all);
	
function get_sub() {
	var outerDiv = document.getElementById("art1");
	var h2s = outerDiv.getElementsByTagName("h2");
	var obj = {
	content : "testestesteste"
	};
	$('#subs').append(obj.content);
}

function myFunction2(id, id2, subclass) {
	var x = document.getElementById(id);
	var y = document.getElementById(id2);
	const sub = document.getElementsByClassName(subclass);
	var z = sub[0].innerHTML;
	var string = "<ul></li>" + sub[0].innerHTML + "</li></ul>"
	
	var obj = {
		content : "HELP ME"
	};	
	
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
		y.innerHTML = "";
		var i = 0; 
		var max = sub.length;
		let subtext = ""
		for(let i = 0; i < sub.length; i++) {
			
			subtext += "<li>" + sub[i].innerHTML + "</li>";
			y.innerHTML = subtext;
			//var item = sub[i].outerHTML;
			//if (i = 0)	{
			//	y.innerHTML = "<ul><li>" + item + "</li><li>";
			//	i = i + 1;
			//}
			//else if (i = max - 1)	{
			//	y.innerHTML += item + "</li></ul>";
			//	i = i + 1;
			//}
			//else if ( 0 < i < max) {
			//	y.innerHTML += item + "</li><li>";
			//	i = i + 1;
			}
		//}
		
		//y.innerHTML = "<ul><li>" + sub[0].innerHTML + "</li><li>" + sub[1].innerHTML + "</li></ul>" ;
  }
}

function myFunction3(id, id2, subclass) {
	var x = document.getElementById(id);
	var y = document.getElementById(id2);
	const sub = document.getElementsByClassName(subclass);
	
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
		y.innerHTML = "";
		let subtext = ""
		for(let i = 0; i < sub.length; i++) {
			
		subtext += "<li><a href=\"#" + sub[i].getAttribute('id') + "\">" + sub[i].innerHTML + "</a></li>";
		y.innerHTML = subtext;
		}
  }
}

function myFunction4(id, id2, class_id) {
	var x = document.getElementById(id); //this is which articles the data is coming from
	var y = document.getElementById(id2); //this is where the metadata info will display
	const sub = document.getElementsByClassName(class_id); //selects ALL mentions of specific class across ALL articles
	//const sub = document.getElementById(id).getElementsByClassName(class_id); //selects things from each column. I think I need to add some if clauses to build the correct combos
	
	if (y.style.display === "block") {
		y.style.display = "none";
		for(let i = 0; i < sub.length; i++) {
			sub[i].removeAttribute('style'); //'style' must be changed to a css id or class. Need to find a way to reload the css, however, or it won't work
		}
	}
	else if (x.style.display === "block") {
		y.style.display = "block";
		y.innerHTML = "";
		let subtext = ""
		for(let i = 0; i < sub.length; i++) {
			sub[i].setAttribute("style", "background-color: red");
			//sub[i].setAttribute("class", "highlight");
			
			if(sub[i].getAttribute('data-label') !== null && sub[i].getAttribute('data-label') !== '') {
			
		
		subtext += "<li><a target='_blank' href='" + sub[i].getAttribute('url') + "'>" + sub[i].getAttribute('data-label') + "</a></li>"; //DECISION: do we want a checkbox to allow you to select only specific things in the list to manipulate in the issue? I think yes but not sure of input.
		y.innerHTML = subtext;
		//sub[i].setAttribute("highlight", "background-color: red");
			}
		}
  }
}

function myFunction5(id, id2, class_id) {
	var x = document.getElementById(id); //this is which articles the data is coming from
	var y = document.getElementById(id2); //this is where the metadata info will be displayed
	var sub;
	//const sub = document.getElementById(id).getElementsByClassName(class_id); //selects things from each column. I think I need to add some if clauses to build the correct combos
	
//var col1 = document.getElementById("Mormons_and_Money").getElementsByClassName(class_id);
	//var col2 = document.getElementbyId("col2").getElementsByClassName(class_id);
	//var col3 = document.getElementById("col3").getElementsByClassName(class_id);
	
	//const sub = col1;
	//if (col1.style.display === "block") {
	//id2.style.color = "pink";
	//}
	//sub += document.getElementById('col1').getElementsByClassName(class_id);
	//}
	//if(document.getElementById('checkbox2').checked == true) {
	//	sub += document.getElementById('col2').getElementsByClassName(class_id);
	//}
	//if(document.getElementById('checkbox3').checked == true) {
	//	sub += document.getElementById('col3').getElementsByClassName(class_id);
	//}
	
	if (y.style.display === "block") {
		y.style.display = "none";
		for(let i = 0; i < sub.length; i++) {
			sub[i].removeAttribute('style'); //'style' must be changed to a css id or class. Need to find a way to reload the css, however, or it won't work
		}
	}
	else if (x.style.display === "block") {
		y.style.display = "block";
		y.innerHTML = "";
		if (col1.style.display === "block") {
			sub = document.getElementById('col1').getElementsByClassName(class_id);
		}
		//if (col3.style.display === "block") {
			//sub += document.getElementById('col2').getElementsByClassName(class_id);
		//}
		var used_labels;
		let subtext = ""
		for(let i = 0; i < sub.length; i++) {
			sub[i].setAttribute("style", "background-color: red");
			
			if(sub[i].getAttribute('data-label') !== null && sub[i].getAttribute('data-label') !== '') {
			
		
		subtext += "<li><a target='_blank' href='" + sub[i].getAttribute('url') + "'>" + sub[i].getAttribute('data-label') + "</a></li>"; //DECISION: do we want a checkbox to allow you to select only specific things in the list to manipulate in the issue? I think yes but not sure of input.
		y.innerHTML = subtext;
		//sub[i].setAttribute("highlight", "background-color: red");
			}
		}
  }
}

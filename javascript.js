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
			
		subtext += "<li><a href=\"#" + sub[i].getAttribute('id') + "\">" + sub[i].innerText + "</a></li>";
		y.innerHTML = subtext;
		}
  }
}


function myfunction6(value) {
	var sub = document.querySelectorAll('[about="' + value + '"]'); //works
	var x = document.getElementById(value);
	
	if (x.hasAttribute("donkey")){ //this is the line that doesn't work how to check if the box is checked or not
			for(let i = 0; i < sub.length; i++) {
				sub[i].classList.add('highlight');
			}
		x.removeAttribute("donkey");
	}
	else{
		for(let i = 0; i < sub.length; i++) {
		sub[i].classList.remove('highlight');
		}
		x.setAttribute("donkey", "kong");
	}

}

function myFunction8(id2, class_id) {
	var y = document.getElementById(id2); //this is where the metadata info will be displayed
	
	var sub1 = document.getElementById('col1').getElementsByClassName(class_id);
	var sub2 = document.getElementById('col2').getElementsByClassName(class_id);
	var sub3 = document.getElementById('col3').getElementsByClassName(class_id);
	var used_labels =[];
		
	if (y.style.display === "block") {
		y.style.display = "none";
		for(let i = 0; i < sub1.length; i++) {
			sub1[i].classList.remove('highlight');
			
		}
		for(let i=0; i< sub2.length; i++) {
			//sub2[i].removeAttribute('style');
			sub1[i].classList.remove('highlight');
		}
		for(let i=0; i< sub3.length; i++) {
			//sub3[i].removeAttribute('style');//'style' must be changed to a css id or class. Need to find a way to reload the css, however, or it won't work
			sub1[i].classList.remove('highlight');
		}
	}
	else {
		y.style.display = "block";
		y.innerHTML = "";
		subtext="";

		if (col1.style.display === "block"){
			sub = document.getElementById('col1').getElementsByClassName(class_id);
			for(let i = 0; i < sub.length; i++) {
			var item = sub[i].getAttribute('data-label');
			//sub[i].setAttribute("style", "background-color: red");
			sub[i].classList.add("highlight");
			
			
			if(item !== null && item !== '' && !((used_labels.includes(item)))) {
			
		
		subtext += "<label><input type='checkbox' checked = 'true' onclick=\"myfunction6('" + sub[i].getAttribute('about') + "')\" id='" + sub[i].getAttribute('about') + "'><a target='_blank' href='" + sub[i].getAttribute('url') + "'>" + sub[i].getAttribute('data-label') + "</a></label><br>"
		used_labels.push(item);
			}
		}
		}
		
		if (col2.style.display === "block") {
			sub = document.getElementById('col2').getElementsByClassName(class_id);;
			for(let i = 0; i < sub.length; i++) {
			//sub[i].setAttribute("style", "background-color: red");
			var item = sub[i].getAttribute('data-label');
			sub[i].classList.add("highlight");
			
			if(item !== null && item !== '' && !((used_labels.includes(item)))) {
			
		
		subtext += "<label><input type='checkbox' checked = 'true' onclick=\"myfunction6('" + sub[i].getAttribute('about') + "')\" id='" + sub[i].getAttribute('about') + "'><a target='_blank' href='" + sub[i].getAttribute('url') + "'>" + sub[i].getAttribute('data-label') + "</a></label><br>"

			}
		}
		}
		if (col3.style.display === "block") {
			sub = document.getElementById('col3').getElementsByClassName(class_id);
			for(let i = 0; i < sub.length; i++) {
			//sub[i].setAttribute("style", "background-color: red");
			var item = sub[i].getAttribute('data-label');
			sub[i].classList.add("highlight");
			
			if(item !== null && item !== '' && !((used_labels.includes(item)))) {
			
	
			subtext += "<label><input type='checkbox' checked = 'true' onclick=\"myfunction6('" + sub[i].getAttribute('about') + "')\" id='" + sub[i].getAttribute('about') + "'><a target='_blank' href='" + sub[i].getAttribute('url') + "'>" + sub[i].getAttribute('data-label') + "</a></label><br>"
			}
			}
		}
		y.innerHTML = subtext;
  }
}


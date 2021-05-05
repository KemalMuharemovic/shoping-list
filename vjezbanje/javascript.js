// var h1 = document.querySelector("h1");
// h1.className = "h1style";


// h1.classList.add("className");
// h1.classList.remove("className");
// h1.classList.toggle("className");




// var p = document.querySelector("p");

// p.style.background = "red";


// var bego = document.querySelector("li");

// bego.classList.add("h1style");


// document.querySelector("h1").innerHTML = "<strong>!!!!</strong";


// document.querySelectorAll("li")[3]; 



// document.querySelectorAll("li")[3].parentElement;


// document.querySelectorAll("li")[3].parentElement.parentElement;


// document.querySelectorAll("li")[3].children;

/************************************************************************/


//EVENT MDN STARTS HERE

//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
//https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

//var button = document.getElementsByTagName("button") it is a common mistake
// beacuse getElements is returning a array we need to define which button!!!


// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function() {

// 	console.log("CLICK!!!!");
// })

//CREATE A NEW ELEMENT BY BUTTON AND HOW TO ATTACHE TO SPECIFIC PLACE

var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");


function inputValueLength() {

	return input.value.length;
}

function createListElement() {

     

	var li = document.createElement("li"); // kreira element
	var delBtn = document.createElement("button");
	//li.appendChild(document.createTextNode("testing")); // kad god kreiramo element moramo tekst dodat
	li.appendChild(document.createTextNode(input.value)); //kad imamo input
	//ul.appendChild(li); // kazemo da ovaj kreirani elment ide u ul
	input.value = "";	
	delBtn.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li);
	li.appendChild(delBtn);
	delBtn.classList.add("classDel");
	li.classList.add("taskClass");
	

	
}

function addEventByClick(){

	if (inputValueLength()>0) {

		createListElement();
	}

}

function addEventByKeypress(task) {

	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function doneTask (event) {

	if (event.target.tagName === "LI") {

		event.target.classList.toggle("done");
	}
}


function deleteBtnService (event1) {

	if (event1.target.className === "classDel") {

		event1.target.parentElement.remove();
	}
}

function allTogheter (element) {
	doneTask(element);
	deleteBtnService(element);
}



ul.addEventListener("click", allTogheter);
button.addEventListener("click", addEventByClick);
input.addEventListener("keypress", addEventByKeypress);

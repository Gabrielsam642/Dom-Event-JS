// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
// 	console.log("click!!!");
// });


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var del = document.getElementById("del")


// function clearDisplay() {
//     const  = document.getElementById('ul');
//     // display.value = '';
// }



function inputlength() {
	return input.value.length;
}

function addEventlisteners() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function addEventListenerKeypress() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
};

 function addEventlistenersafter() {
	if (inputlength() > 0) {

		addEventlisteners();

	}
};

function   addEventListenerKeypressafter(event) {
	if (inputlength() > 0 && event.keyCode === 13) {

		addEventListenerKeypress();

	}
	
}

button.addEventListener("click", addEventlistenersafter);



input.addEventListener("keypress", addEventListenerKeypressafter);


// let Del = document.getElementById("del");
let sel;


ul.addEventListener('click', function(e){
	if(e.target.localName === 'li')
	 {sel = e.target};
	[...ul.children].forEach(li => li.classList.remove('select'));
	sel.classList.add('select');
	
})

function deleteSelected(){
	sel.remove()
}
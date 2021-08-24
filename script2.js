var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function bgStyle() {
	body.style.background= 
"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background + ";";
};

//https://www.w3schools.com/jsref/jsref_random.asp
function setColor(){
	body.style.background = 
	"linear-gradient(to right, " + ("#" + Math.floor(Math.random()*16777215).toString(16)) + ", " 
	+ ("#" + Math.floor(Math.random()*16777215).toString(16)) + ")";
	css.textContent = body.style.background + ";";
};

color1.addEventListener("input", bgStyle);

color2.addEventListener("input", bgStyle);

randomButton.addEventListener("click", setColor);

//The purpose of this script is to change the color of all the link elements.
var links = document.querySelectorAll("a");

document.setInterval(function(){
	for(var i = 0; i < links.length; i++){
		links[i].style.color = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
	}
},100)

/* script.js 
   Author:
   Date:
   
   1. how to hide and reveal the story captions? 
*/


/*$(document).ready(function(){ // begin document.ready block

	
	$("#video").get(0);
	$("#video").get(0).play();	
	$("#video").get(0).loop = true;
	

	var vid = document.getElementById("video");

	$("#mute").click(function(){
	console.log("working");		
	vid.muted = true;
	});
	
	$("#unmute").click(function(){
	console.log("working");		
	vid.muted = false;
	});
	
	
	
}); //end document.ready block */

$(document).ready(function(){ 
var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#pause");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
});



var vid1 = document.getElementById("bgvid");
var muteButton = document.querySelector("#mute");

$("#mute").click(function(){	

if (vid1.muted){
vid1.muted=false;
//console.log("working");
muteButton.innerHTML = "Mute";
}
else {
vid1.muted = true;
muteButton.innerHTML = "Unmute";
//console.log("working");
}
	});
	

});

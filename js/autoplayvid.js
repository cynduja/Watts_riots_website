/* script.js 
   Author:
   Date:
   
   
*/



/*Pause by manipulating HTML5 video properties. I took the stopfade idea from another background video tutorial, basically adding to the css class property of stopfade and then toggling it */

$(document).ready(function(){ 
var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#pause");

function vidFade() {
  vid.classList.add("stopfade");
}


$("#pause").click(function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
});


/* Mute by manipulating HTML5 video properties */

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

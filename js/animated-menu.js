/* script.js 
   Author: Jenna
   Date: Nov 8 
   
  animated menu test
  
  based on: http://buildinternet.com/live/smoothmenu/animated-menu.html
  and using: http://gsgd.co.uk/sandbox/jquery/easing/
*/

$(document).ready(function(){

	//when mouse rolls over
	$(".menuitem").mouseover(function(){
		console.log("here");
		$(this).stop().animate({top:'-50px', height:'100px'}, {queue:false, duration:400, easing:'swing'});
	});
		
	//when mouse leaves
	$(".menuitem").mouseout(function(){
		$(this).stop().animate({top:'0px', height:'50px'}, {queue:false, duration:400, easing:'jswing'});
	});
	
});
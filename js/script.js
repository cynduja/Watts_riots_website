/* script.js 
   Author:
   Date:
   
*/


$(document).ready(function(){ // begin document.ready block


	
	//displays story1 caption on mouseenter
	$("#story1,#storypic1").mouseenter(function(){
		//console.log("working");
		$("#story1").toggle();
	});
	
	//hides story1 caption on mouseleave
	$("#story1,#storypic1").mouseleave(function(){
		//console.log("working");
		$("#story1").hide();
	});
	
	
	//displays story2 caption on mouseenter
	$("#story2,#storypic2").mouseenter(function(){
		//console.log("working");
		$("#story2").toggle();
	});
	
	//hides story2 caption on mouseleave
	$("#story2,#storypic2").mouseleave(function(){
		//console.log("working");
		$("#story2").hide();
	});
	
	
	//displays story3 caption on mouseenter
	$("#story3,#storypic3").mouseenter(function(){
		//console.log("working");
		$("#story3").toggle();
	});
	
	//hides story3 caption on mouseleave
	$("#story3,#storypic3").mouseleave(function(){
		//console.log("working");
		$("#story3").hide();
	});
	
	$("#storypic4").mouseenter(function(){
		//console.log("working");
		$("#story4").toggle();
	});
	
	$("#storypic4").mouseleave(function(){
		//console.log("working");
		$("#story4").hide();
	});
	
	
	

	
	//when mouse rolls over
	$(".menuitem").mouseover(function(){
		console.log("here");
		$(this).stop().animate({top:'-50px', height:'100px'}, {queue:false, duration:400, easing:'swing'});
	});
	
	//when mouse leaves
	$(".menuitem").mouseout(function(){
		//console.log("gone");
		$(this).stop().animate({top:'0px', height:'50px'}, {queue:false, duration:400, easing:'jswing'});
	});
	
	//changes opacity of menu when mouse rolls over
	$(".menuitem").mouseover(function(){
		$(".menuitem").css("opacity", "0.8");
	});
	
		
	//changes opacity of menu when mouse leaves
	$(".menuitem").mouseout(function(){
		$(".menuitem").css("opacity", "0.4");
	});
	

// PARALLAX 

	var s = skrollr.init({
		    render: function(data) {
		    
		    }
		});


// end parallax



}); //end document.ready block

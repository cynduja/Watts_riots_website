/* script.js 
   Author: PL Bustamante
   Date: Fall 2014
   Project: drive-through demo
*/

	
$(document).ready(function(){ // begin document.ready block
	
	// dynamically builds all the divs to set off waypoints.js action
	var len = framelist.length;
	for (var i=0; i<len; i++) {
		$('#zapfilm').append('<div id="'+framelist[i]+'" class="zapframe"></div>');
	}
	
	// makes the div #freezepoint stick to the top of the browser window
	$('#freezepoint').waypoint('sticky');
	
	// changes the image when scrolling past each of the divs [see div builder loop]
	$('.zapframe').waypoint(function(direction){
		// get the value of 'data-zap' for each div
		
		zapframeno = $(this).attr("id"); //changed from "data-zap"
		// set the img src attribute to the new image
		
		$('#framebyframe').attr('src','img/zap_frames/'+zapframeno+'.jpg');
		
		//console.log(zapframeno);
		zapframeint = parseInt(zapframeno);
	    console.log(zapframeint);
	    
	    //hotspot1
	    if (zapframeint>10 && zapframeint<25)
	    
	    {
		$("#hotspot1").css("visibility", "visible");
		$("#hotspot1").fadeIn(1000);
		console.log("its working");
		//console.log(zapframeint);
		
		} 
		if (zapframeint<10 || zapframeint>25)
	
		{
		
		$("#hotspot1").fadeOut();
		$("#hotspot1").css("visibility", "hidden");
	
		
		}	
		
		//hotspot2
		
		if (zapframeint>35 && zapframeint<50)
	    
	    {
		
		$("#hotspot2").css("visibility", "visible");
		$("#hotspot2").fadeIn(1000);
		//console.log("its working");
		//console.log(zapframeint);
		
		} 
		if (zapframeint<35 || zapframeint>50)
	
		{
		
		$("#hotspot2").fadeOut();
		$("#hotspot2").css("visibility", "hidden");
		
		
		}	
		
		//hotspot3	
		
		if (zapframeint>75 && zapframeint<90)
	    
	    {
		
		$("#hotspot3").css("visibility", "visible");
		$("#hotspot3").fadeIn(1000);
		//console.log("its working");
		//console.log(zapframeint);
		
		} 
		if (zapframeint<75 || zapframeint>90)
	
		{
		
		$("#hotspot3").fadeOut();
		$("#hotspot3").css("visibility", "hidden");
		
		
		}	
		
		//hotspot4	
		
		if (zapframeint>110 && zapframeint<125)
	    
	    {
		
		$("#hotspot4").css("visibility", "visible");
		$("#hotspot4").fadeIn(1000);
		//console.log("its working");
		//console.log(zapframeint);
		
		} 
		if (zapframeint<110 || zapframeint>125)
	
		{
		
		$("#hotspot4").fadeOut();
		$("#hotspot4").css("visibility", "hidden");
		
		
		}	
		
	//hotspot5
		
		if (zapframeint>150 && zapframeint<165)
	    
	    {
		
		$("#hotspot5").css("visibility", "visible");
		$("#hotspot5").fadeIn(1000);
		//console.log("its working");
		//console.log(zapframeint);
		
		} 
		if (zapframeint<150 || zapframeint>165)
	
		{
		
		$("#hotspot5").fadeOut();
		$("#hotspot5").css("visibility", "hidden");
		
		
		}	
		
		//hotspot6
		
		if (zapframeint>200 && zapframeint<215)
	    
	    {
		
		$("#hotspot6").css("visibility", "visible");
		$("#hotspot6").fadeIn(1000);
		//console.log("its working");
		//console.log(zapframeint);
		
		} 
		if (zapframeint<200 || zapframeint>215)
	
		{
		
		$("#hotspot6").fadeOut();
		$("#hotspot6").css("visibility", "hidden");
		
		
		}	
		
		//hotspot7
		
		if (zapframeint>270 && zapframeint<290)
	    
	    {
		
		$("#hotspot7").css("visibility", "visible");
		$("#hotspot7").fadeIn(1000);
		//console.log("its working");
		//console.log(zapframeint);
		
		} 
		if (zapframeint<270 || zapframeint>290)
	
		{
		
		$("#hotspot7").fadeOut();
		$("#hotspot7").css("visibility", "hidden");
		
		
		}
		
	},{offset: 700 });


}); //end document.ready block

/* An array (list) of the images */

var framelist=[];


// dynamically build the framelist[] array/list

frames_num = 304;
framelist = [];

for ( var i=1; i<=frames_num; i++ ) {
	frame = ('0000' + i).slice(-4);
	framelist.push(frame);
} 




// preload() function: loads the images on load and then hides them
/* IMAGE PRELOAD BEGIN */
	
	function preload(imgarray) {
		$(imgarray).each(function(){
			 $('<img />').attr('src','img/zap_frames/'+ this + '.jpg').appendTo('body').css('display','none');
		});
	}
	preload(framelist);

/* IMAGE PRELOAD END */

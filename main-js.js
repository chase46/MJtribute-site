var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 20200;	// Time Between Switch
	 
// Image List
images[0] = "mj.jpg";
images[1] = "mm.jpg";
images[2] = "mmm.png";
images[3] = "mmm.png";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;



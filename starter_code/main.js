var city = "";

$(document).ready(function() {


			
	$("#submit-btn").click(function(e) {
		
		e.preventDefault();
	
		// store entry of form into variable and remove extra spacing and make it case insensitive
	
		city = $("#city-type").val().toLowerCase().trim();

		// reset entry form

		$("#city-type").val("");

			// if var = New York, New York City or NYC
				// change picture to NY.png

		if (city == "new york" || city == "nyc" || city == "new york city") $("body").css("background-image", "url(./images/nyc.jpg");

			// if var = San Francisco, SF or Bay Area 
			// change picture to SF.png


		if (city == "san francisco" || city == "sf" || city == "bay area") $("body").css("background-image", "url(./images/sf.jpg");

			// if var = Los Angeles, LA or LAX 
				// change picture to LA.png

		if (city == "los angeles" || city == "LAX" || city == "la") $("body").css("background-image", "url(./images/la.jpg");

			// if var = Austin or ATX
				//change picture to austin.png

		if (city == "austin" || city == "atx") $("body").css("background-image", "url(./images/austin.jpg");

	
		//if var = Sydney or SYD 
			// change picture to sydney.png

		if (city == "sydney" || city == "syd") $("body").css("background-image", "url(./images/sydney.jpg");

	});
})
function Countdown(endTime) {
 

 	
 	function setElement(id, fDays, fHours, fMinutes, fSeconds) {
 		// Ak je dlzka hodnoty mensia ako 2, zmen ju. (priklad: 9 sekund zmen na 09 sekund
		if (fDays < 10) {
			fDays = "0" + fDays;
		}
		if (fHours < 10) {
			fHours = "0" + fHours;
		}
		if (fMinutes < 10) {
			fMinutes = "0" + fMinutes;
		}

		if (fSeconds < 10) {
			fSeconds = "0" + fSeconds;
		}
		if (fDays == "01") {
			fDaysKoncovka = " ";
		} else {
			fDaysKoncovka = "s"
		};

		if (fHours == "01") {
			fHoursKoncovka = " ";
		} else {
			fHoursKoncovka = "s"
		};

		if (fMinutes == "01") {
			fMinutesKoncovka = " ";
		} else {
			fMinutesKoncovka = "s"
		};

		if (fSeconds == "01") {
			fSecondsKoncovka = " ";
		} else {
			fSecondsKoncovka = "s"
		};
		$(id).html("<div class='on'><h1>Countdown untill kick-off</h1><span id='countdown-days'>"+fDays+"<p>day"+fDaysKoncovka+"</p></span><span id='countdown-hours'>"+fHours+"<p>hour"+fHoursKoncovka+"</p></span><span id='countdown-minutes'>"+fMinutes+"<p>minute"+fMinutesKoncovka+"</p></span><span id='countdown-seconds'>"+fSeconds+"<p>second"+fSecondsKoncovka+"</p></span></div>");
	}
 	
 	function countdown() {
 		now		= new Date();
 	  	diff	= new Date(endTime - now);
 	  	
 		seconds_left  = Math.floor(diff / 1000);
 	
 		seconds  = Math.floor(seconds_left / 1) % 60;
 		minutes  = Math.floor(seconds_left / 60) % 60;
 		hours    = Math.floor(seconds_left / 3600) % 24;
 		days     = Math.floor(seconds_left / 86400) % 86400;
 		
 		setElement('.countDown', days, hours, minutes, seconds);
 		

 		
 		
 		timer = setTimeout(countdown, 1000);
 	}
 	
 		
 	function start() {
 		timer = setTimeout(countdown, 1000);
 	}
 	
 	start(endTime);	
 }
 
 Countdown(new Date("Sep 12 2013 15:48:00"));

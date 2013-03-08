function Countdown(cd) {
 
 	this.cd = cd;
 	
 	function setElement(id, value) {
		if (value.length < 2) {
		value = "0" + value;
		}

		if (id == "countdown-days" && "countdown-hours" && "countdown-minutes" && "countdown-seconds" && value == "0") {
		window.location = "PracticalTest2.html";
		}
		
		window.document.getElementById(id).innerHTML = value;
		}
 	
 	function countdown() {
 		now		= new Date();
 	  	diff	= new Date(this.cd - now);
 	  	
 		seconds_left  = Math.floor(diff.valueOf() / 1000);
 	
 		seconds  = Math.floor(seconds_left / 1) % 60;
 		minutes  = Math.floor(seconds_left / 60) % 60;
 		hours    = Math.floor(seconds_left / 3600) % 24;
 		days     = Math.floor(seconds_left / 86400) % 86400;
 		
 		setElement('countdown-days', days);
 		setElement('countdown-hours', hours);
 		setElement('countdown-minutes', minutes);
 		setElement('countdown-seconds', seconds);
 		
 		countdown.timer = setTimeout(countdown, 1000);
 	}
 	
 		
 	function start() {
 		this.timer = setTimeout(countdown, 1000);
 	}
 	
 	start(cd);	
 }
 
 Countdown(new Date("Sep 12 2013 15:00:00"));

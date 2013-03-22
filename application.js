var options1 = {
	endTime: new Date().getTime()+5000,
	onCountDownEnd: function()
	{  
      $("#fixtureList").toggleClass("on off");
      $("#count1").toggleClass("on off");
      $("#commentary").toggleClass("on off");
      $("#heading").toggleClass("on off");
    }, 
    onCountDownChange: function() 
    {
    	console.log("Zmena.");
    }
};

var options2 = {
	endTime: new Date().getTime()+10000,
	onCountDownEnd: function(){
		$("#count2").toggleClass("on off");
	}
};

$('#count1').countdown('init', options1);
$('#count2').countdown('init', options2);

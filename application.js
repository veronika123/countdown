var options1 = {
	endTime: new Date().getTime()+5000,
	onCountDownEnd: function()
	{  
      $("#fixtureList").toggleClass("on off");
      $("#count1").toggleClass("on off");
      $("#commentary").toggleClass("on off");
      $("#heading").toggleClass("on off");
      $('#count2').countdown('reset', new Date().getTime()+5000);

      var xxx = setTimeout(function(){
        $('#count2').countdown('stop');
      }, 2000);
      
    }, 
    onCountDownChange: function() 
    {
    	console.log("Zmena.");
    }
};




$('#count1').countdown('init', options1);
$('#count2').countdown('init');

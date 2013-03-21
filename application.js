var options1 = {
  endTime: new Date().getTime()+5000,
}

var options2 = {
	endTime: new Date().getTime()+10000,
}

$('#count1').countdown('init', options1);
$ ('#count2').countdown('init', options2);

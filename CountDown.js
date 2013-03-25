(function (window, document, $) {
  'use strict';
  /**
   * Countdown jQuery plugin
   *
   * Sample Usage:
   *
   * $('.countdown').countdown();
   * $('.countdown').countdown('destroy');
   *
   * @method
   * @customOptions
   *
   * @return   {object}
   */
  $.fn.extend({
    countdown: function (method, customOptions) {
      var $htmlElement = $(this);
      var options = 
      {
      	endTime: new Date("Sep 12 2013 15:00:00"),
        onCountDownEnd: false,
        onCountDownChange: false,
      };

      var methods;

      options = $.extend(options, customOptions);

      methods = {
        /**
        * initializing function
        */
        init : function () {
          
          return this.each(function () { // Maintaining Chainability  
          $(this).data('endTime', options.endTime);
          counter(options.endTime);      
          });
        },

        reset : function (date) {
          return this.each(function () {
          $htmlElement.data('endTime', date);
          });
        },

        stop : function () {
          return this.each(function () {
          $htmlElement.data('stopp', true);
          });
        },

        /**
        * destroy function
        */
        destroy : function () {
        }
      };


  function addElement(id, daysElement, hoursElement, minElement, secElement) {
    // Ak je dlzka hodnoty mensia ako 2, zmen ju. (priklad: 9 sekund zmen na 09 sekund

    if (daysElement < 10) {daysElement = "0" + daysElement;}
    if (hoursElement < 10) {hoursElement = "0" + hoursElement;}
    if (minElement < 10) {minElement = "0" + minElement;}
    if (secElement < 10) {secElement = "0" + secElement;}

    if (daysElement === "01") {var daysEnding = " ";} else {daysEnding = "s";}
    if (hoursElement === "01") {var hoursEnding = " ";} else {hoursEnding = "s";}
    if (minElement === "01") {var minEnding = " ";} else {minEnding = "s";}
    if (secEnding === "01") {var secEnding = " ";} else {secEnding = "s";}

    $(id).html("<span id='countdown-days'>"+daysElement+"<p>day"+daysEnding+"</p></span><span id='countdown-hours'>"+hoursElement+"<p>hour"+hoursEnding+"</p></span><span id='countdown-minutes'>"+minElement+"<p>minute"+minEnding+"</p></span><span id='countdown-seconds'>"+secElement+"<p>second"+secEnding+"</p></span>");
  }

	function counter(endTime) 
  {
 		var now		= new Date(); 	  
    var difference	= new Date(endTime - now);
 		var seconds_left  = Math.floor(difference / 1000);
 	
 		var seconds  = Math.floor(seconds_left / 1) % 60;
 		var minutes  = Math.floor(seconds_left / 60) % 60;
 		var hours    = Math.floor(seconds_left / 3600) % 24;
 		var days     = Math.floor(seconds_left / 86400) % 86400;

    if (difference.getTime() >= 0) {

     addElement($htmlElement, days, hours, minutes, seconds);

     if (typeof(options.onCountDownChange) === "function") 
      {
        options.onCountDownChange();
      }
      if($htmlElement.data('stopp')){}

        else{

          if ($htmlElement.data('endTime')) {
            endTime = $htmlElement.data('endTime');
            $htmlElement.data('endTime', false);

          }
          var timer = setTimeout(function () {
                            counter(endTime);
                      }, 1000);
        }
    } else {
        if (typeof(options.onCountDownEnd) === "function")
        {
          options.onCountDownEnd();
        } 
    }
  }  
      // methods caller
      if ( methods[method] ) {
        // call selected method
        return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
        // call init
        return methods.init.apply( this, arguments);
      } else {
        // method not found
        $.error( 'Method ' +  method + ' does not exist on jQuery.countdown plugin' );
      }
    }
  });

}(window, document, jQuery));

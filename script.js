'use strict';

$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $('.navigation').css('background-color', '#b94335');
        } else {
           $('.navigation').css('background-color', 'transparent');
        }
    });
 });
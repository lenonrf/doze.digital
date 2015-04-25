/*global jQuery:false */
jQuery(document).ready(function ($) {
    "use strict";

/*-----------------------------------------------------------------------------------*/
/*  1. BACKSTRETCH HEADER IMAGE
/*-----------------------------------------------------------------------------------*/

	var bgImage = $('#header').css('background-image').replace(/^url|[\(\)]/g, '').replace(/\"/g, '');
	$("#header").backstretch(bgImage,{duration:3000,fade:1000});

});
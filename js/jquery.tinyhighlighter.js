(function($) {
	$.fn.tinyHighlighter = function() {
		// Lets start by iterating over all the plugin initiater found on the page
		return $(this).each(function() {			
			var arr = $(this).html().split("\n");
			//Split it's code based on line-break. "\n" represents new line

			var html = ""; //Initialize a variable to store our generated html
			num = 1; // For line number

			//Now iterate over each line
			$(arr).each(function(k,v) {
				if( (k==0 && v.length != 0) || (k == arr.length-1 && v.length != 0) || (k != 0 && k != arr.length-1 ) )  {
					// ^ If the line is first and last and there is nothing in it escape it

					html += "<li><span class=\"no\">"+ (num++) +"</span><pre>"+v+"</pre></li>";
					//Generate the list item with the line number in it
				}
			});
			$(this).replaceWith("<ul class=\"tinyhighlighter\">" + html + "</ul>");
		}); 
	};
})(jQuery);

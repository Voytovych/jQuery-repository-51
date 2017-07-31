/* ---------------------------------------------------------------	
	Blog Entry:
	Debug jQuery events with ‘listHandlers()’
	
	Author:
	James Padolsey
	
	Link:
	http://james.padolsey.com/javascript/debug-jquery-events-with-listhandlers/
	
	Date Posted:
	January 8th, 2009 
	
--------------------------------------------------------------- */

$.fn.listHandlers = function(events, outputFunction) {
    return this.each(function(i){
        var elem = this,
            dEvents = $(this).data('events');
        if (!dEvents) {return;}
        $.each(dEvents, function(name, handler){
            if((new RegExp('^(' + (events === '*' ? '.+' : events.replace(',','|').replace(/^on/i,'')) + ')$' ,'i')).test(name)) {
               $.each(handler, function(i,handler){
                   outputFunction(elem, '\n' + i + ': [' + name + '] : ' + handler );
               });
           }
        });
    });
};
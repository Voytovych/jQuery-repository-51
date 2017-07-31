$(function(){

	$('#ajax-msg-form').submit(function(evtObj){
		
		evtObj.preventDefault();
		
		var form = $(this);
		var log  = function(msg){
			console.log ? console.log(msg) : alert(msg);
		}
				
		$.ajax({
			url        : form.attr('action'),
			async      : true,
			type       : 'POST',
			data       : form.serialize(),
			dataType   : 'json',
			success    : function(data, textStatus, xhr){},
			error      : function(xhr, textStatus, errorObj){},
			dataFilter : function(data, dataType){ return data; }
		});
		
	});
	
	$.ajaxSetup({
		beforeSend : function(xhr){},
		complete   : function(xhr, textStatus){}
	});
});
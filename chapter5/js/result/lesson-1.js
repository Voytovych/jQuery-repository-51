$(function(){

	$('#ajax-msg-form').submit(function(evtObj){
		
		evtObj.preventDefault();
		
		var form = $(this);
		var log  = function(msg){
			console.log ? console.log(msg) : alert(msg);
		}
				
		$.ajax({
			url         : form.attr('action'),
			async       : false,
			type        : 'POST',
			data        : form.serialize(),
			processData : false,
			contentType : 'application/x-www-form-urlencoded',
			dataType    : 'json'
		});
		
		log('***');
		
	});
});
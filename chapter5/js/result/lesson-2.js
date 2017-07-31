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
			success    : function(data, textStatus, xhr){
			
				if(data.success == '1')
					log('письмо было отправлено');
				else if(data.error == '1')
					log('письмо отправлено НЕ было. причина: '+data.notification);
				else
					log('произошла неизвестна ошибка');
			},
			error      : function(xhr, textStatus, errorObj){
				
				log('произошла ошибка!');
				log(textStatus);
				log(errorObj.message);
			},
			dataFilter : function(data, dataType){ return data; }
		});
		
	});
	
	$.ajaxSetup({
		beforeSend : function(xhr){ $('#load-indicator').show(); },
		complete   : function(xhr, textStatus){ $('#load-indicator').hide(); }
	});
});
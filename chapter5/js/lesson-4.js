$(function(){

	var form = $('#ajax-msg-form');
	var log  = function(msg){
				console.log ? console.log(msg) : alert(msg);
			}
			
	$.ajaxSetup({
		url        : form.attr('action'),
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
			log('произошла ошибка. сообщение не было отправлено.');
		}
	});
		
	$('#ajax-msg-form').submit(function(evtObj){});
	
	$('#load-indicator').ajaxStart(function(){});
	
	$('#load-indicator').ajaxStop(function(){});
	
	$('body').ajaxSend(function(evt, xhr, opts){});
});


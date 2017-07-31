$(function(){

	var log  = function(msg){
				   console.log ? console.log(msg) : alert(msg);
			   }
		
	$('#press-it').click(function(evtObj){
		
		$.ajax({
			url        : 'notmod.html',
			ifModified : true,
			global     : false,
			complete   : function(xhr, textStatus){
				log(xhr);
				log('status: '+textStatus);
			}
		});
	});
	
	$('body').ajaxComplete(function(){ log('AJAX'); });
});


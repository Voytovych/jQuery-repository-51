$(function(){

	var form = $('#ajax-msg-form');
	var log  = function(msg){
				console.log ? console.log(msg) : alert(msg);
			}
			
	$('#load-indicator').ajaxStart(function(){ $('#load-indicator').show(); });
	$('#load-indicator').ajaxStop(function(){ $('#load-indicator').hide(); });
		
	$('#ajax-msg-form').submit(function(evtObj){
		
		evtObj.preventDefault();
		
		//$.get(form.attr('action'), form.serialize(), function(data, status){ log(data); }, 'json');
		//$.post(form.attr('action'), form.serialize(), function(data, status){ log(data); }, 'json');
		//$.getJSON(form.attr('action'), form.serialize(), function(data, status){ log(data); });
		
		$('#load-container').load('to_load_2.html #quot_2');
	});
	
	/*$.ajax({
		url: $(this).attr('action')
		});*/
});


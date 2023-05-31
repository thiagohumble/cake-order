$('#cakeSubmintBtn').click(function(){
	var fname = $('#fname').val();

	console.log(fname);
});

$.post('https://jsonplaceholder.typicode.com/posts', function(data, textStatus, xhr) {
	fname:name
}, function(response){
	console.log(response);
});


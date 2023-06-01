$('#cake-order-form').submit(function(e){
	e.preventDefault();

	var name = $('#fname').val() +' '+ $('#lname').val();

	var title = $('.cakeContainer-ContainerTitle_title').text();
	var phone = $('#phoneUS').val();
	var email = $('#email').val();
	var cakeId = $('#id').data('id');
	var order = {
		title: title,
		body: 
		{
			"Pedido": {
				"Cliente": [
				{
					"No": "1",
					"Name": name,
					"Phone": phone,
					"email": email
				}
				],
				"Bolo": [
				{
					"id": cakeId
				}
				],
				"Solicitado em": "Dec 2022"
			}
		}
	}

	function cakeSelected(){
		const data = new FormData(form);
		let output = "";
		for (const entry of data) {
			output = `${output}${entry[0]}=${entry[1]}\r`;
		}
		log.innerText = output;
	}

	function sendForm() {
		$.ajax({
			type: 'POST',
			url: 'https://jsonplaceholder.typicode.com/posts',
			data: order,
			success: function(response){
				console.log(response)
			}
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}

	if ($('#cake-order-form').valid()) sendForm();
})

//form validation
$.validator.setDefaults({
  debug: true,
  success: "valid"
});

$("#cake-order-form").validate({
	rules: {
		fname: {
			minlength: 3,
			maxlength: 15,
			required: true
		},
		lname: {
			minlength: 3,
			maxlength: 15,
			required: true
		},
    email: {
      required: true,
      email: true
    },
    phoneid: {
      required: true,
      number: true,
      maxlength: 10
    }
  }
});
$('#ddate').change(function(event) {
	var str = $(this).val();
	var date = new Date(str.split('/').reverse().join('/'));
	var newDate = new Date();
	(date < newDate) ? $('#cakeSubmintBtn').attr("disabled", 'disabled') : $('#cakeSubmintBtn').removeAttr("disabled", 'disabled')
});

$('#cake-order-form').submit(function(e){

	var name = $('#fname').val() +' '+ $('#lname').val();
	var form = $('#cake-order-form');
	var title = $('.cakeContainer-ContainerTitle_title').text();
	var phone = $('#phoneUS').val();
	var email = $('#email').val();
	var cakeId = $('input[name="cake"]:checked').data('id');
	var order = {
		title: title,
		body: 
		{
			"Pedido": {
				"Cliente": [
				{
					"Name": name,
					"Phone": phone,
					"email": email
				}
				],
				"Bolo": [
				{
					"id": cakeId
				}
				]
			}
		}
	}

function sendForm() {
		$.ajax({
			type: 'POST',
			url: 'https://jsonplaceholder.typicode.com/posts',
			data: order,
			success: function(response){
			}
		})
		.done(function() {
				$('span[type="button"').trigger( "click" );
				$('#cake-order-form').each (function(){
					this.reset();
				});
		})
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
      minlength: 10,
      maxlength: 10
    }
  }
});
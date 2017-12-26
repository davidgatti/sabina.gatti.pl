$("#news_letter").submit(function(event) {

	//
	//	1.	Let the user know the email is being saved
	//
	$('#submit').val('Saving...');

	//
	//	2. Prevent the browser from taking the default action
	//
	event.preventDefault();

	//
	//	3.	Save the DOM focused data
	//
	var $form = $(this);

	//
	//	4.	Get the email from the form
	//
	var email = $('#email').val();

	//
	//	5.	URL to use
	//
	var url = 'https://newsletter.api.sabina.gatti.pl/v1/subscribe';

	//
	//	6.	Data to send
	//
	let data = JSON.stringify({
		email: email
	});

	//
	//	7.	Make the request
	//
	$.ajax({
		url: url,
		type: 'POST',
		contentType: "application/json",
		data: data
	})
	.done(function(data) {

		//
		//	1.	Let the user know that the email was saved
		//
		$('#submit').val('Saved');

		//
		//	2.	Disable the button to show that the action
		//		was completed.
		//
		$('#submit').prop('disabled', true)

	})
	.fail(function(xhr, status, error) {

		//
		//	1.	Reset the button
		//
		$('#submit').val('Submit');

		//
		//	2.	Mark the input as invalid
		//
		$('#email').addClass('is-invalid')

		//console.log(xhr.responseText)

	});

});
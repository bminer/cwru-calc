$(document).ready(function() {
	// oh joel
	$('#plus').on('click', function() {
		var num1 = $('#num1').val();
		var num2 = $('#num2').val();
		var result = parseInt(num1) + parseInt(num2);
		$('#result').text(result)
	});
	
	$('#minus').on('click', function() {
		var num1 = $('#num1').val();
		var num2 = $('#num2').val();
		var result = parseInt(num1) - parseInt(num2);

		$('#result').text(result)
	})
});

$(document).ready(function() {
	$('#plus').on('click', function() {
		var num1 = $('#num1').val();
		var num2 = $('#num2').val();
		var result = num1 + num2;
		console.log('plus')
		console.log(result)
		$('#result').text(result)
	});
	
	$('#minus').on('click', function() {
		var num1 = $('#num1').val();
		var num2 = $('#num2').val();
		var result = num1 - num2;

		$('#result').text(result)
	})
});

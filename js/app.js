$(document).ready(function() {

	$('form').on('submit', function(e) {
		e.preventDefault();

		var newNumber = $('.input').val()
	
		var num = +newNumber //converts string to number
		$('.input').val('');
		$('.fizzbuzz').empty(); //clears list when new number is submitted

		if ( num !== NaN && num >= 1 && num <= 100 && num % 1 == 0) {
	
      var i = 1
			while (i <= num) {
				if (i % 15 == 0) {
					$('.fizzbuzz').append('<li>FizzBuzz</li>');
				} else if (i % 3 == 0) {
					$('.fizzbuzz').append('<li>Fizz</li>');
				} else if (i % 5 == 0) {
					$('.fizzbuzz').append('<li>Buzz</li>');
				} else {
					$('.fizzbuzz').append('<li>' + i + '</li>');
				}
				i++
		  }
		} else {
			alert("Please type in a whole number between 1 and 100, NOW!!!!");
		}
});

	$('.reset').click(function(e) {
		e.preventDefault();
		$('.fizzbuzz').empty();
	});
	//clears list

});


// Make all your variables

//Generates a random number
var random = Math.floor(Math.random() *120+1)
//Generates a value for each crystal
var blue = Math.floor(Math.random() * 12 +1)
var red = Math.floor(Math.random() *12 +1)
var yellow = Math.floor(Math.random() *12 +1)
var green = Math.floor(Math.random() *12 +1)
//Inital values are set to 0
var guessTotal = 0;
var wins = 0;
var losses = 0;

//Displays the number to match on the page
$(".numberdisplay").html(random);


//Create a function for clicking blue, red, yellow, green respectively 
$("#blue").click(function() {
	update(blue);
	console.log(blue);
});
$("#red").click(function() {
	update(red);
	console.log(red);
});
$("#yellow").click(function() {
	update(yellow);
	console.log(yellow);
});
$("#green").click(function() {
	update(green);
	console.log(green);
});

//Write a reset function
function reset() {

	random= Math.floor(Math.random() * 120 + 1)
	$(".numberdisplay").html(random)

	blue = Math.floor(Math.random() * 12 +1)
	red = Math.floor(Math.random() *12 +1)
	yellow = Math.floor(Math.random() *12 +1)
	green = Math.floor(Math.random() *12 +1)

	guessTotal=0;
	$(".guessdisplay").html(guessTotal);

};

//Function to update the user's total guess
//with no parameter, see what happens;
	function update(color) {
//add value to the current value
		guessTotal += color;
		$(".guessdisplay").empty(guessTotal);
		$(".guessdisplay").append(guessTotal);
			if(guessTotal > random) {
				losses++;
				$("#numberLosses").html(losses);
            
            reset();

        } else if (guessTotal === random) {
            wins++;
            $("#numberWins").html(wins);
            alert(winAlert()); 
            reset();
        };
	};
//wrote some random win alerts for fun ;)
	function winAlert() {
		var randomtext = new Array();
			randomtext[0] = "You're so smart-- can I have your number?";
			randomtext[1] = "You are number ONE!";
			randomtext[2] = "Your math knowledge is infinite!";
			var i = Math.floor(Math.random() * 2 + 1);
			return randomtext[i];
	}



















/*Create a for loop that will iterate through 100 numbers starting from 1 and do the following:

if the number is a multiple of 3, it will console.log "fizz",
if the number is a multiple of 5, it will console.log "buzz",  
if the number is a multiple of 3 and 5, it will console.log "fizzBuzz"
*/

for (var i = 1; i <= 100; i++) {
	if (i%3 === 0 && i%5 === 0) { //printing fizzbuzz for multiples of 3 & 5
		console.log("fizzbuzz");
	} else if (i%3 !== 0 && i%5 === 0) { //printing buzz for multiples of 5
		console.log("buzz");
	} else if (i%3 === 0 && i%5 !== 0) { //printing fizz for multiples of 3
		console.log("fizz");
	} else {
		console.log(i);
	}
}
console.log("BREAK");

for (var i = 100; i >= 1; i--) {
	if (i%3 === 0 && i%5 === 0) { //printing fizzbuzz for multiples of 3 & 5
		console.log("fizzbuzz");
	} else if (i%3 !== 0 && i%5 === 0) { //printing buzz for multiples of 5
		console.log("buzz");
	} else if (i%3 === 0 && i%5 !== 0) { //printing fizz for multiples of 3
		console.log("fizz");
	} else {
		console.log(i);
	}
}
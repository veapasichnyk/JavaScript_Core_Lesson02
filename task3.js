function sum(number1, number2) {
	try {
		console.log(number1 + number2);
	} catch (err) {
		console.log(err);

	}
}

function substract(number1, number2) {
	try {
		console.log(number1 - number2);
	} catch (err) {
		console.log(err);

	}
}
function multiply(number1, number2) {
	try {
		console.log(number1 * number2);
	} catch (err) {
		console.log(err);

	}
}
function divide(number1, number2) {
	try {
        if ( 0 == number2 ) {
            throw new Error('Error!!! Can`t be divided by 0 ')
          } else {
            console.log(number1 / number2);
          }
    } catch (err) {
            console.log(err)
        }

}

divide(2,0);
multiply(2,12897);
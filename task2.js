let employeeSalaries = {
    worker1: 1000,
    worker2: 1500,
    worker3: 2000,
    worker4: 2500,
    worker5: 10000

};

let salary = function sum() {
	let sum = 0;

	for(let key in employeeSalaries){
		sum += employeeSalaries[key];	
	}
	
	return sum;
}

console.log("The sum of all salaries of employees is " + salary() + "$");
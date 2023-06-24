// function sayHi(name = 'Максон') {
// 	const greeting = 'Привет, ' + name + '!';
// 	console.log(greeting);
// }

// sayHi();


// function checkAge(age) {
// 	if (age>=18) {
// 		console.log('you are welcome!');
// 	}
// 	else {
// 		console.log('you are not allowed');
// 	}
// }

// checkAge(8);
// checkAge(19);
// checkAge(18);


// let user = 'Миша'

// 	function changeUserName() {
// 		user = 'Гриша'
// 		console.log(user)
// 	}

// 	changeUserName();



// let user = 'Миша'; 

// function addSurName() { 
//    let surNamechik = prompt('Как твоя фамилия?', '');
// 	alert('Здарова, ' + user + ' ' + surNamechik);
// }

// addSurName();


// function sum(a, b) {
// 	return  a+b;
// }

// let result = sum(3, 4);
// console.log(result);


// function checkAge(age) {
// 	if(age>=18) {
// 		return true;
// 	}
// 	else {
// 		return confirm('А родители разрешили?');
// 	}
// }

// function showMovie(age) {
// 	if (!checkAge(age)) {
// 		return;
// 	}
// 	alert("Вам показывается хуй")
// }

// checkAge(10);
// showMovie(10);


// function calc(a, b, operation) {
// 	if (operation == 'add') {
// 		return a + b;
// 	}
// 	else if (operation == 'multi') {
// 		return a * b;
// 	}
// 	else if (operation == 'subtract') {
// 		return a - b;
// 	}
// }

// console.log(calc(2, 3, 'subtract'));

	
	switch (calc) {
		case 'add':
			return a+b;пше 
			break;
		case 'multi':
			return a*b;
			break;
		case 'subtract':
			return a-b;
			break;
	}

	console.log(calc(5, 7, 'subtract'));
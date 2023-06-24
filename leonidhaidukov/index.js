// function checkAge(age) {
//     age < 18 ? console.log("Hello yuong cub") : console.log("Hello old Man")
// }

// checkAge(18)
// checkAge(20)
// checkAge(15)

// function calc(operation, a, b) {
//     if (operation === 'add') {
//         return Number(a) + Number(b)
//     }
//     else if (operation === "multi") {
//         return Number(a) * Number(b)
//     }
//     else if (operation === "subtract") {
//         return Number(a) - Number(b)
//     }
//     else {
//         return "Введите корректное значение названия операции и чисел!"
//     }
// }

// console.log(calc("add", 5, 6));
// console.log(calc("", 5, 6));
// console.log(calc("", 5, 6));
// console.log(calc("add", "s", 6));

function calc(operation, a, b) {
    if (operation !== "add" && operation !== "multi" && operation !== "subtract" && operation !== "division") {
        return "Введите правильное название операции на английском"
    }
    let result;
	switch (operation) {
		case "add":
			result = Number(a) + Number(b);
            break
		case "multi":
			result = Number(a) * Number(b);
            break
		case "subtract":
			result = Number(a) - Number(b);
            break
		case "division":
            result = Number(a) / Number(b);
            break
	}
    if (Number.isNaN(result)) {
        return "Введите корректное значение переменных"
    }
    else if (result === Infinity) {
        return 'Бэсконечность брат'
    }
    else {
    return result
    }
}
console.log(calc("add", 5, 6));
console.log(calc("multi", 5, 6));
console.log(calc("subtract", 5, 6));
console.log(calc("add", "s", 6));
console.log(calc("add", "", 6));
console.log(calc("add", undefined, 6));
console.log(calc("add", NaN, 6));
console.log(calc("division", 12, 6));
console.log(calc("division", 12, 7));
console.log(calc("division", 0, 7));
console.log(calc("division", 3, 0));
console.log(calc("плюс", 3, 0));



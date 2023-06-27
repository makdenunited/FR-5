const chatActivity = {
	list: {
		"alex lesley": 76647847666478476,
		"Alexander Lennikov": 76647847678647847,
		"Alexander Winduke": 76478476664784766,
		"Anton Ivanov": 76647847666478476,
		"Banan": 76647847678647847,
		"byka":  34346564,
	},
	log () {
		console.log(this.list);
	}
};
chatActivity.log();
console.log(chatActivity.list);
chatActivity.log();
console.log(chatActivity);
chatActivity["byka"] = +76647847678647847;
chatActivity.log();
console.log(chatActivity);
delete chatActivity["byka2"];
chatActivity.log();
console.log(chatActivity);
console.log(chatActivity.list);

// const phoneBook = {
// 	'John': 123456789, // ключ John со значением 123456789
// 	"Jane Doe": 987654321,
// 	'JaneDoe': +798763421,
// 	"Jim Smith": 111111111
// };
//
// console.log(phoneBook); // { John: 123456789, 'Jane Doe': 987654321, 'Jim Smith': 111111111 }
//
// // нотация точки
// console.log(phoneBook.John); // 123456789
// // нотация квадратных скобок
// console.log(phoneBook["Jane Doe"]); // 987654321
//
// // в нотации с точкой нельзя использовать пробелы
// console.log(phoneBook.JaneDoe); // будет ошибка
// // строка в квадратных скобках
// console.log(phoneBook["Jane Doe"]); // 987654321
//
// phoneBook["Katie Johnson"] = 456789123; // добавить запись
// phoneBook["Jane Doe"] = 222222222; // обновить запись
// delete phoneBook["Jim Smith"]; // удалить запись
//
// const phoneBook1 = {
// 	list: { // перенесли все контакты в свойство list
// 		"John": 123456789,
// 		"Jane Doe": 987654321,
// 		"Jim Smith": 111111111
// 	},
// 	log() { // добавили метод log
// 		console.log('its a phonebook!')
// 	}
// };
//
// phoneBook1.log(); // it's a phonebook!
//
// const phoneBook2 = {
// 	list: {
// 		"John": 123456789,
// 		"Jane Doe": 987654321,
// 		"Jim Smith": 111111111
// 	},
// 	log() {
// 		console.log(this.list) // в этом случае this.list === phoneBook.list
// 	}
// };
//
// phoneBook2.log(); // { John: 123456789, 'Jane Doe': 987654321, 'Jim Smith': 111111111 }
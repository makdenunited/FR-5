// function addBook (name, number) { // Добовляет Контакт
//     phoneBook.list[name] = [number]
// }

// function deleteBook(name) { // Удаляет контакт
//     delete phoneBook.list[name];
// }

// const phoneBook = {
//     list: {
//         'Jane' : 41921991,
//         'Tom' : 214354323,
//         'Deril Vilson' : 2413523524
//     }
// }

// addBook('Gabriel', 23765431245);
// deleteBook('Tom');

// console.log(phoneBook)

/////////////////////////////////// IN

// const phoneBook = {
// 	list: {
// 		"John": 123456789,
// 		"Jane Doe": 987654321,
// 	}
// };

// console.log("John" in phoneBook.list); // true

// const phoneBook = {
//     list: {
//       "John": 123456789,
//       "Jane Doe": 987654321,
//       "Jim Smith": 111111111
//     },
//   };

//  for(const name in phoneBook.list) {
//     console.log(name);
//     console.log(phoneBook.list[name])
//  }

const phoneBook = {
    list: {
      "John": 123456789,
      "Jane Doe": 987654321,
      "Jim Smith": 111111111
    },
  };

  for(const name in phoneBook.list) {
    console.log(name ,' - ', phoneBook.list[name] )
  }
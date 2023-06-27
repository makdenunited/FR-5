// const myPhoneBook = {
//   Kirill: 89064989865,
//   "Andrey Petrov": 89064967865,
//   "Vika Perova": 89064343455,
// };

// delete myPhoneBook.Kirill;
// myPhoneBook["Kirill Svetliy"] = 5555555;
// myPhoneBook["Andrey Petrov"] = 121212121;

// console.log(myPhoneBook);

const myPhoneBook = {
  list: {
    Kirill: 89064989865,
    "Andrey Petrov": 89064967865,
    "Vika Perova": 89064343455,
  },
  log() {
    console.log(this.list);
  },
};

delete myPhoneBook.list["Kirill"];
myPhoneBook.list["Kirill Svetliy"] = 5555555;
myPhoneBook.list["Andrey Petrov"] = 121212121;

myPhoneBook.log();

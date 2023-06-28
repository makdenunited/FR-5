const phoneBook = {
  list: {
    John: 123456789,
    'Jane Doe': 987654321,
    'Jim Smith': 111111111,
  },
  add(name, number) {
    this.list[name] = number;
  },
  delete(name) {
    delete this.list[name];
  },
  delete(name) {
    delete this.list[name];
  },
};

phoneBook.add('Michael Quoker', 4870992863);
phoneBook.delete('Jim Smith');
phoneBook.delete('John');

console.log(phoneBook.list['Michael Quoker']);
console.log(phoneBook);

const myPhoneBook = {
  list: {
    'Kendrik Nevill': 135791113,
    'Jacob Avosky': 2468101214,
    'Massimo Alessio ': 1234567890,
  },
};

for (const name in myPhoneBook.list) {
  console.log(name + ' - ' + myPhoneBook.list[name]);
}

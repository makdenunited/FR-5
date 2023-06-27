const phoneBook = {
  list: {
    Kent: 987646022,
    Sniper: 'number009',
    WalkStreet: 'onlystring',
    'Maybe Yes': 4487682,
  },
  log() {
    console.log(this.list);
  },
};

phoneBook.log();

phoneBook['Merage Vicente'] = 796094;
delete phoneBook['Merage Vicente'];

console.log(phoneBook.list.Kent);
console.log(phoneBook.list.Sniper);
console.log(phoneBook.list.WalkStreet);
console.log(phoneBook['Merage Vicente']);
console.log(phoneBook.list['Maybe Yes']);

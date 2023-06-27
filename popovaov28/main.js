const phoneBook = {
  Dana: 9139640734,
  Aleksey: 9990338453,
  Iren: 9997714674,
};
console.log(phoneBook);

phoneBook['Ivan'] = 7054885688;
phoneBook['Iren'] = 9954547146;
delete phoneBook['Aleksey'];
console.log(phoneBook);
console.log(phoneBook.Dana);
console.log(phoneBook['Iren']);

const phoneBookList = {
  list: {
    Dana: 9139640734,
    Aleksey: 9990338453,
    Iren: 9997714674,
  },
  log() {
    console.log('its a phonebook!');
    console.log(this.list);
  },
};
phoneBookList.log();

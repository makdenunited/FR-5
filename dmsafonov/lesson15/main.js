let phoneBook = {
  'Alexander': 89088082435,
  'Natalia': 4235325325,
  'Yuri': 865235332,
  'Dmitry Safonov': 24324325,
  'Dmitry Ivanov': 244235325,
  del(name){
    delete this[name];
    console.log(this);
  }
};
console.log(phoneBook);
console.log(phoneBook['Dmitry Safonov'])

console.log(phoneBook);

phoneBook.Alex = 8942433325;
console.log(phoneBook);
phoneBook['Dmitry Safonov'] = 89277770751;
console.log(phoneBook);
phoneBook.del('Alexander');
phoneBook.del('Natalia');
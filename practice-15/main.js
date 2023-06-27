const phoneBook = {
  "Vasya Ivanov": "+7 (456) 234-40-50",
  "Dasha Petrova": "+7 (999) 666-7-778",
  "Philipp Kirkorov": "7 (111) 777-2-222",
  Yasha: "+7 (846) 222-456-999",
};

console.log(phoneBook["Dasha Petrova"]);
delete phoneBook["Dasha Petrova"];
console.log(phoneBook);
console.log(phoneBook.Yasha);

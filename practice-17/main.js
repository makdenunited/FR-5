const phoneBook = {
  list: {
    "Vasya Ivanov": "+7 (456) 234-40-50",
    "Dasha Petrova": "+7 (999) 666-7-778",
    "Philipp Kirkorov": "+7 (111) 777-2-222",
    Yasha: "+7 (846) 222-456-999",
  },

  log() {
    console.log(this.list);
  },

  add(name, number) {
    this.list[name] = number;
  },

  remove(name, number) {
    delete this.list[name];
  },
};

phoneBook.log();
const fullName = "Philipp Kirkorov";
console.log(phoneBook.list[fullName]);
console.log(phoneBook.list["Philipp Kirkorov"]);

phoneBook.add("Sophi", "+7 (991) 111-7-333");
console.log(phoneBook.list["Sophi"]);

phoneBook.remove("Yasha");
console.log(phoneBook.list);

for (const name in phoneBook.list) {
  console.log(name + " - " + phoneBook.list[name]);
}

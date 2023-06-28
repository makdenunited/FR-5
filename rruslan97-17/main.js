const phoneBook = {
    list: {
        "Ruslan": 5,
        "Diana": 26,
        "Mama Roza": 9,
        "Papa Yurik": 10,
        "Bonya": 12
    },
  add (name, number) {
    this.list[name] = number;
  },
  remove (qwe) {
    delete phoneBook.list[qwe];
  }
};

// console.log(phoneBook.list);
// phoneBook.add ('Jack', 1234567);
// console.log(phoneBook.list);
// phoneBook.remove ("Bonya");
// console.log(phoneBook.list);




for (const name in phoneBook.list) {
    console.log(name + '-'+ phoneBook.list[name]);
    // console.log(phoneBook.list[name] );
  }

  console.log(phoneBook.list.Art);
  console.log("Rezyapov" in phoneBook.list);
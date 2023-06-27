const phoneBook = {
  "Alex": 89567843,
  "Dadddy": 89564783845,
  "Treable": 8965739238954,
}
console.log(phoneBook);
phoneBook [" Petru St"] = 89203401273;  
phoneBook ["Dadddy"] = 1111111;
delete phoneBook ["Alex"];
console.log(phoneBook);
console.log(phoneBook.Dadddy);

const book = {
  list: {
    "Martin Eden": "JackLondon",
    "My Antonia": "WillaCather",
    "Age of Innocence": "EdithWharton",
    "Babbit": "SinclairLewis",
  },
  log() {
    console.log(this.list)
  }
};
book.log();

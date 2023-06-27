const phoneBook = {
  list: {
    "Elena Stepanovna": 213456789,
    "Elizaveta Panina": 123456789,
    "Vadim Petrov": 987654321,
  },
  log() {
    console.log(this.list);
  },
};

delete phoneBook.list["Elena Stepanovna"];
phoneBook.list["Vadim Petrov"] = 123456789;
phoneBook.log();

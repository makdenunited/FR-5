const phoneBook = {
    list: {
      "Misha": 123456789,
      "Dima": 987654321,
      "Sam": 111111111,
      "Kirill": 79254571846,
      "Andrei": 79363289175,
    },
    log() {
          console.log(this.list)
    }
  };
  delete phoneBook.list["Sam"];
  phoneBook.log(); 
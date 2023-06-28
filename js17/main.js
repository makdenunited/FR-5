const phoneContact = {
    list: {
    "Piter": 7921333445,
    "Santa Claus": 7921557733,
    },
    add(name, number) {
        this.list[name] = number;
    }
  };
  phoneBook.add("Alex Pirs",22112231);
  console.log(phoneBook.list['Alex Pirs']);
 
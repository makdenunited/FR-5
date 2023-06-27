const phoneBook = {
    list: {
        "Anna": 111111111,
        "Ivan Ivanovich": 222222222,
        "Olga": 333333333,
        "Petr Petrovich": 444444444,
        "Svetlana": 555555555
    },
    log() {
        console.log(this.list)
    }
};


phoneBook.list["Olga"] = 777777777;
phoneBook.list["Igor Igorevich"] = 666666666;
phoneBook.list["Anton"] = 888888888;
delete phoneBook.list["Anna"];

console.log(phoneBook.list.Olga); // 777777777;
console.log(phoneBook.list["Igor Igorevich"]); // 777777777;

console.log(phoneBook.list) // одинаково с phoneBook.log();
phoneBook.log();
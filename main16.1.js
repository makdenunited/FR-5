const phoneBook = {
    "Alexander New" : 123456789,
    "Sonya Dr" : 234567899,
    "Marina Sister" : 345678999,
    "Michael Ivanov" : 456789123,
};
console.log(phoneBook)
{
phoneBook["Marina Fr"] = 4567891; // добавить запись Marina Fr
phoneBook["Alexander New"] = 2222224; // обновить запись
delete phoneBook["Michael Ivanov"]; // удалить запись
}
console.log(phoneBook)

const welcomeBonus = {
    list: {
     "Alexander New" : (1500 + ' bonus'),
     "Boris Ivanov" : (100 + ' bonus'),
     "Marina Sister" : (900 + ' bonus'),
     "Michael Ivanov" : (180 + ' bonus')             
    },
    log() {
    console.log(this.list)
    }
    }
    welcomeBonus.log()
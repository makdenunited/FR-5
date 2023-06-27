const phoneBook = {
    'Vlad': 123456789,
    'Mom': 111222333
}

const brotherPhoneName = 'Bro'

phoneBook.Dasha = 555777999
phoneBook['Mom new'] = 333222111
delete phoneBook.Mom
phoneBook[brotherPhoneName] = 999999999
phoneBook.log = function () {
    console.log('it\'s a phonebook!');
}
phoneBook.callBro = function () {
    console.log(`call to ${this.Bro}!`);
}


console.log(phoneBook);
phoneBook.callBro()

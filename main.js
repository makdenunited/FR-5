let phoneBook = {
    usersList: {
    "A": 11111,
    "Tan": 22222,
    "Cat 1": 33333,
    "Cat 2": 44444,
    },
    showPhoneNumber (user) {
        console.log(`${user}'s phone number is ${this.usersList[user]}`);
    },
}

phoneBook.usersList.Nick = 55555;

delete phoneBook.usersList.Tan;

phoneBook.showPhoneNumber('Nick');
phoneBook.showPhoneNumber('Tan');

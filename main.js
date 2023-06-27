const phoneBook = {
    "Bankomatik": 199903021,
    "Danya Bak": 609200022,
    "LP": 200023023,
    "Danya": 710200044,
    "Ilya": 123456785,
    "Mamochka": 196507066,
    "Kabachok": 608199977,
    "Zanuda": 200007118,
    "Arishka": 201019999,
    "Polina Task": 709200110
}
console.log(phoneBook);
console.log("Arishka's phone number is " + phoneBook.Arishka);
console.log("Danya Bak's phone number is " + phoneBook["Danya Bak"]);
phoneBook["Alina Yapp"] = 987654321;
phoneBook["Ilya"] = 123456780;
delete phoneBook["Polina Task"];
console.log(phoneBook);
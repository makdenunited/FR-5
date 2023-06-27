const phoneBook = {
"Андрей":123123113,
"Ден":5464677,
"Кротокрыс":999999,
"Руслан":345326,
"Матвей":43564364

};
console.log(phoneBook.Матвей);
console.log(phoneBook["Руслан"]);
phoneBook["ЕбаныйЗимбабвиец"] = 777777777;
phoneBook["Андрей"] = 222222222;
delete phoneBook["Ден"];
console.log(phoneBook);
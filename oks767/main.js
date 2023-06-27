const telegramContact = {
  Мыш: 12234545,
  'Илья Объедков': +375291688515,
};
console.log(telegramContact);
telegramContact['Мыш'] = 79533610410;
console.log(telegramContact);
telegramContact['Katie Johnson'] = 456789123;
console.log(telegramContact);
delete telegramContact['Мыш'];

const telegramBook = {
  'Jack': 111111,
  'John John': 222222,
  'Joe Joe Joe': 333333
};

console.log(telegramBook);
console.log(telegramBook.Jack);
console.log(telegramBook['John John']);

telegramBook['Jim Jim'] = 444444;
console.log(telegramBook);

telegramBook['Jack'] = 99999999;
console.log(telegramBook);

delete telegramBook['Jack'];
console.log(telegramBook);

telegramBook['George'] = '111-222-333-444';
console.log(telegramBook);


const telegramBookNew = {
  list: { 
    'Jack': 111111,
    'John John': 222222,
    'Joe Joe Joe': 333333
  },
  log() { 
		console.log(this.list) 
  }
};
telegramBookNew.list['Tom'] = '666-999-666';
telegramBookNew.log(); 
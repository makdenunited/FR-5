const phoneBook = {
    list: {
      'Иванов Иван': '+7 (123) 456-78-90',
      'Петров Петр': '+7 (234) 567-89-01',
      'Сидоров Сидор': '+7 (345) 678-90-12',
      'Кузнецова Анна': '+7 (456) 789-01-23',
      'Смирнов Сергей': '+7 (567) 890-12-34',
      'Морозова Екатерина': '+7 (678) 901-23-45',
      'Николаева Ольга': '+7 (789) 012-34-56',
      'Козлов Алексей': '+7 (890) 123-45-67',
      'Федорова Елена': '+7 (901) 234-56-78',
      'Антонов Дмитрий': '+7 (012) 345-67-89',
      'Игорь': '56-56-56'
    }, 
    addContact(name, number) {
        this.list[name] = number; 
    },
    deleteContact(name, number) {
       delete this.list[name];
    }
  }
  
  
  phoneBook.addContact('Vasya Pupkin', 123123123);
  phoneBook.deleteContact('Игорь');
  phoneBook.deleteContact('Антонов Дмитрий');
  
  for (let key in phoneBook.list) {
    console.log(key + ' - ' + phoneBook.list[key]);
  }
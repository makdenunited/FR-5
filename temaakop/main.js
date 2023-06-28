const phoneBook = {
    list: {
      "John": 123456789,
      "Jane Doe": 987654321,
      "Jim Smith": 111111111
    },
    add (name, number) {
      this.list[name] = number
    },
    
    delete (name) {
      delete this.list[name]
    }
  };
  
  phoneBook.add('Artem Akopov', 7)
  phoneBook.delete('Jane Doe')
  console.log(phoneBook.list)
  console.log('John' in phoneBook.list)
  console.log(phoneBook.list.John)
  
  
  for (let name in phoneBook.list) {
    console.log(`${name} ${phoneBook.list[name]}`)
  }


const phoneBook = {
  list: { 
    'Jack': 111111,
    'John John': 222222,
    'Joe Joe Joe': 333333
  },
  add(name, number) { 
    this.list[name] = number;
  },
  del(name) {
    delete this.list[name];
  }
};

phoneBook.add('Jim Fom', 666666); 
console.log(phoneBook); 

phoneBook.del('Jack');
phoneBook.del('John John');
console.log(phoneBook);

console.log("Joe Joe Joe" in phoneBook.list); 
console.log("Jack" in phoneBook.list);

phoneBook.add('Jack', 111111);

for (const name in phoneBook.list) {
  console.log(`(${name} - ${phoneBook.list[name]})`)
}
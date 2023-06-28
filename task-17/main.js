const phoneBook={
    list:{
        'contact1': 89199998867,
        'contact2':987632454,
    },
    add(name,number){
        this.list[name]=number;
    },
    remove(name){
        delete this.list[name];
    },
    print(){
        for(const name in phoneBook.list){
            console.log(name);
            console.log(phoneBook.list[name]);
        }
    }
};
phoneBook.add('alex',898989898);

phoneBook.print();

phoneBook.remove('contact1');

console.log("Удалена запись contact1")

phoneBook.print();

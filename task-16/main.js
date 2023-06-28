const phoneBook={
    list:{
        'contact1': 89199998867,
        'contact2':987632454,
    },
    print(){
        console.log(this.list);
    }
};
phoneBook.print();

phoneBook.list['contact3']=9999;
phoneBook.list['contact4']=8765432;
delete phoneBook.list['contact2'];
phoneBook.print();
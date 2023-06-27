const telegram = {
    list : {
        'tim' : 89201935,
        'alex' : 9230123,
        'michael' : 9201385,
        'sabina' : 239123,
        'max' : 9222231,
    },
    print() {
        console.log(this.list);
    },
    add (user, phone) {
        this.list[user] = phone; 
    },
    delete (user) {
        delete this.list[user];
    }
}

telegram.list.max = 94444231;    
delete telegram.list.tim;
telegram['list']['anny'] = 922312312;

telegram.print();
telegram.add('mitch', 9222301123);
telegram.print();
telegram.delete('alex');
telegram.print();

// telegram.print();
// let a = 10;
// console.log(this);

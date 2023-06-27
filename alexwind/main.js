const phonebook = {
    list: {
        "Alex" : 8911123234,
        "Den" : 8914908314,
        "Ben" : 8991434133
    },    
    log() { 
        console.log(this.list)
    }
};

console.log(phonebook)

phonebook["Pen"] = 8924123456;
phonebook.Ben = 8912345678;

console.log(phonebook)

delete phonebook["Den"];

phonebook.log();





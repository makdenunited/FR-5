const myBook = {
	list: {
		"Kristaps": 987678951,
		"Jeck Rassel": 123456789,
		"Jim Kerry": 234578419,
        "Adam Smit": 122221333,
	},
	addNew(name, number) {
		this.list[name] = number;
	},
    deleteContact(name) {
        delete this.list[name];
    }
};

myBook.addNew("Jon Jonson", 999999999);
console.log(myBook.list["Jon Jonson"]);
console.log(myBook)
myBook.deleteContact("Jon Jonson");
console.log(myBook)
console.log("Kristaps" in myBook.list)

for (const name in myBook.list) {
    console.log(`${name} - ${myBook.list[name]}`)
}


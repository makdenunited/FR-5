const phoneBook = {
	"Switzerland Phone Number": "+41-76-5480000",
	"Czech Phone Number": "+ 8-10-420-2-123 45 67",
	"American Phone Number": "+7 10 1 213 6930466",
}



phoneBook['Switzerland Phone Number'] = '41-76-6000000'
phoneBook['Kazakhstan Phone Number'] = '+7 7172 74-07-97'

console.log(phoneBook['Switzerland Phone Number'])
console.log(phoneBook['Kazakhstan Phone Number'])
delete phoneBook['Switzerland Phone Number']
console.log(phoneBook)
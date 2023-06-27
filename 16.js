const phoneBook = {
    contacts: {
      "John": "1-251-789",
      "Ann": "2-566-754",
      "Jane": "5-222-543",
      "Alex": "2-321-643"
   },
  log() {
    console.log(this.contacts) 
  }
};

 console.log(phoneBook.contacts.Jane)
 delete phoneBook.contacts["Ann"];
 phoneBook.log()

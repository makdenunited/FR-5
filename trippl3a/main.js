const phone = {
    'contactsList': {
        'name1': {
            'tag': '@name1',
            'number': '+7-123-123-1212',
        },
        'name2': {
            'tag': '@name2',
            'number': '+7-234-234-2323',
        },
        'name3': {
            'tag': '@name3',
            'number': '+7-345-345-3434',
        },
    },

    logContacts() {
        console.log(this.contactsList)
    },

    createContact(name, number) {
        this.contactsList[name] = {
            'tag': `@${name}`,
            'number': number,
        }
        console.log(this.contactsList[name])
        return;
    },
}

delete phone.contactsList.name2
phone.contactsList["name4"] = {
    'tag': '@name4',
    'number': '+7-456-456-4545',
} 

phone.contactsList["name1"] = {
    'tag': '@name12',
    'number': '+7-121-121-1212'
}

phone.logContacts()
phone.createContact('name5', '+7-567-567-5656')
phone.logContacts()

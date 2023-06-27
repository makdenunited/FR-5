const contacts = {
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
    'createContact': function(name, number) {
        this[name] = {
            'tag': `@${name}`,
            'number': number,
        }
        console.log(this[name])
        return;
    }
}

delete contacts.name2
contacts.name4 = {
    'tag': '@name4',
    'number': '+7-456-456-4545',
} 

contacts["name1"] = {
    'tag': '@name12',
    'number': '+7-121-121-1212'
}
console.log(contacts)

contacts.createContact('name5', '+7-567-567-5656')

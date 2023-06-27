const phoneBook = {
    list: {
        "Daler": 79999999999,
        "Andrew": 79997779977,
        "Sergo": 79991112233
    },
    log() {
    console.log(this.list);
    }
}

phoneBook["Dan"] = 79001002222;
delete phoneBook.Sergo;
phoneBook.Alice = 71234567890;
phoneBook.Daler = 77777777777;
phoneBook.log();
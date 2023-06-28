const itBlogers = {
    list: {
        'Стой под стрелой': '@nikitonsky_pub',
        'ityoutubers.com': '@ityoutubers_com',
        'Strada': '@stradaone',
        'Digital Ниндзя': '@digital_ninjaa',
        'Бобук': '@addmeto'
    },
    log() {
        for (const key in this.list) {
            console.log(`Блог ${key} в Telegram - ${this.list[key]}`);
        }
    },
    add(nameChanel, telegramNickname) {
        this.list[nameChanel] = telegramNickname;
    },
    del(nameChanel) {
        delete this.list[nameChanel]
    },
};


itBlogers.log();
console.log('\n')
itBlogers.add('Senior Software Vlogger', '@seniorsoftwarevlogger');
itBlogers.log();
console.log('\n')
itBlogers.del('Стой под стрелой', '@nikitonsky_pub');
itBlogers.log();

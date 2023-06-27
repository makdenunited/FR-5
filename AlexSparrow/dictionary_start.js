let itBlogers = {
    list: {
        'Стой под стрелой': '@nikitonsky_pub',
        'ityoutubers.com': '@ityoutubers_com',
        'Strada': '@stradaone',
        'Digital Ниндзя': '@digital_ninjaa',
        'Бобук': '@addmeto'
    },
    log() {
        for (let key in this.list) {
            console.log(this.list[key]);
        }
    }
};


console.log(itBlogers.Strada)
console.log(itBlogers['Digital Ниндзя'])

itBlogers['Artem Dimitrov'] = '@ArtemDimitrov'
console.log(itBlogers)

delete itBlogers["ityoutubers.com"]
console.log(itBlogers)

itBlogers.log()

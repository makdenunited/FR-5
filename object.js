const myFriendsBirthdays = {
    list: {
        "Oleg": '18.06.2003',
        "Maksim": '07.07.2005',
        "Annya": '02.09.2005',
    },
    log() {
        console.log(this.list);
    }
}
myFriendsBirthdays.log();

delete myFriendsBirthdays.list["Oleg"];
myFriendsBirthdays.list["Tema"] = '06.08.2005';
myFriendsBirthdays.log();
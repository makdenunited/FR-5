const contactFromTelegram = {
	"Mother": 4815162342,
	"Father": 1170080090,
	"Sister": 2323232323,
};

contactFromTelegram["Brother"] = 1404040404;
contactFromTelegram["Sister"] = 7777777777;
// delete contactFromTelegram["Mother"];
delete contactFromTelegram.Mother;


console.log(contactFromTelegram);
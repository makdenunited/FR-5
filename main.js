console.log("hello");
let s = prompt("Введите ваше имя", "");
if (s == ""){
    alert("empety field");
} else {
    alert("your name: " + s);
}

let age = prompt("Введите возраст", "");
function checkAge(age){
if (age == "") { alert("empety field"); }
else if (age < 18) { alert("Иди поиграй в песочнице"); } 
else if (age < 100) { alert("Входите"); } 
else { alert("Кто деда впустил?"); }
}
switch(age){
    case age < 18:   
        alert("Иди поиграй в песочнице");
        break;
    case age < 100:
        alert("Входите");
        break;
    case age > 100:   
        alert("Кто деда впустил?");
        break;
    default :
        alert("empety field");
}

checkAge(age);
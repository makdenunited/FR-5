
let a = +prompt("Введите цифру", "");
let b = +prompt("Введите цифру ", "");
let operation = prompt("Выполните действие", "");

    switch(operation){
      case "add" :
         alert(a + b);
       break;   
      case "multi" :
        alert(a * b);
      break;
      case "subtract" :
        alert(a - b);
      break;
      default:
         alert("не число либо не верное действие");
    };
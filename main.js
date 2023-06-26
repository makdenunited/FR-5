
let a = +prompt("Введите цифру", "");
let b = +prompt("Введите цифру ", "");
let operation = prompt("Выполните действие", "");
function calc(a, b, operation){
    switch(operation){
      case "add" :
        return a + b;
       
      case "multi" :
        return  a * b;
        
      case "subtract" :
          return a - b;
      default:
         alert("не число либо не верное действие");
    }
 };

 let result = calc( a, b, operation);
 alert(result);

 
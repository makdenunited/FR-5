function calc(a, b, operation) {
  let result;
  switch (operation) {
    case "add":
      return a + b;
      break;
    case "subtract":
      return a - b;
      break;
    case "multi":
      return a * b;
      break;
  }
}
result = calc(4, 2, "multi") ;
console.log(result); // Я, к сожалению, не смог разобраться как сделать вывод результата красивее.

//calc(1, 2, "add");
//calc("subtract", 3, 2);







/* function sayHi(name = 'User') {
  name = prompt ("What is your name?", "User");
  const greeting = 'Hi, ' + name + '!';
	alert(greeting);
}

sayHi();
function checkage(age = "Age") {
  age = prompt ("How old are you?", 20); 
  if(age >= 18) {
    alert("you are welcome!")
  } else{
    alert("you are not allowed")
}}
checkage(); */
function calc (a, b, operation) {
    if (isNaN(a) || isNaN(b)) {
        return "Check the numbers"
    } else {
        switch (operation) {
            case 'add': 
                return a + b;
            case 'multi':
                return a * b;
            case 'subtract':
                return a - b;
            default:
                return 'Check the entered operation';       
        }
    }    
}
  function checkData (a, b, operation) {
    if (typeof a === "number" && typeof b === "number" && typeof operation === "string") {
         return calc (a, b, operation);
    } else {return "Check the entered data"}
  }
  function showResult (a, b, operation) {
    console.log(checkData(a, b, operation));
  }
showResult (1, 2, 'add');
showResult(1, 3, 'multi');
showResult(7, 4, 'subtract');
showResult('1', 3, 'multi');
showResult(1, 3, undefined);
showResult(1, 3, '');
showResult(undefined, 3, 'add');
showResult(NaN, 3, 'add');



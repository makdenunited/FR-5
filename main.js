function calc(a,b,operation){
      if ('add' === operation){
        return (a + b);
      }
      if ('multi'=== operation){
        return (a * b);
      }
      if('subtract' === opeartion){
        return (a - b);
      }
        else { return ('please use correct values');}
      }

      console.log(calc(1,2,'add'));
      console.log(calc(1,2,'multi'));
      console.log(calc(3,1,'subtract'));

function calc(a,b,operation){
      switch (operation){
      case 'add':
        return (a + b);
      break
      case 'multi':
        return (a * b);
      break
      case (subtract):
        return (a - b);
      break
      default:
        return ('please use correct values');
      }
    }
      
console.log(calc(1,2,'multi'));
console.log(calc(1,2,'add'));
console.log(calc(3,1,'subtract'))














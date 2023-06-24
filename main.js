const calc = (operation, a, b) => {
    switch (operation) {
      case "add":
        console.log(a + b);
        break;
      case "multi":
        console.log(a * b);
        break;
      case "subtract":
        console.log(a - b);
        break;
      default:
        console.log("Enter operation name");
    }
  }
  
  calc("add", 5, 2)
  calc("multi", 2, 2)
  calc("subtract", 3, 2)
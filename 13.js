const calc = (operation, a, b) => {
    switch (operation) {
      case "add":
        return a + b
      case "multi":
        return a * b
      case "subtract":
        return a - b
      default:
        console.log("Enter operation name");
    }
  }
  
  calc("add", 5, 2)
  calc("multi", 2, 2)
  calc("subtract", 3, 2)

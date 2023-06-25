function сalc(operation, a, b) {
    switch(operation) {
        case "add":
            return console.log(a + b);
        case "multi":
            return console.log(a * b);
        case "subtract":
            return console.log(a - b);
        default:
            return console.error("Operation is not defined");
    }
}

сalc("add", 1, 2);
сalc("multi", 1, 2);
сalc("subtract", 3, 2);
сalc("error", 3, 2);
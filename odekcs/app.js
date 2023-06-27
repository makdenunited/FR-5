function calc(a, b, operation){
    // if(operation === "add"){
    //     return a + b
    // }
    // if(operation === "subtract"){
    //     return a - b
    // }
    // if(operation === "multi"){
    //     return a * b
    // }

    switch (operation){
        case "add":
            return a + b
            
            break

        case "subtract":
            return a - b

            break

        case "multi":
            return a * b   

            break
    }
}


console.log( calc(1, 2, "subtract") )
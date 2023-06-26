function calculation (operation,c,d) {
    switch(operation) {
    case 'add':
        console.log (c + d);
        break;
    case 'multi':
        console.log (c * d);
        break;
    case 'subtract':
        console.log (c - d);
        break;
    }
}

calculation('add', 1, 2);
calculation('multi', 1, 2);
calculation('subtract', 3, 2);
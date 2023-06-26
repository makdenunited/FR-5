/***** While *****/
function handleWhile() {
    let i = 1;

    while (i < 20) {
        console.log(i);
        i++;
    }
}
handleWhile();

function handleDoWhile() {
    let i = 1;

    do {
        console.log(i);
        i++;
    } while (i < 20);
}
handleDoWhile();

function handleWhileWithBreak() {
    let i = 1;

    while (true) {
        if (i < 20) {
            console.log(i);
            i++;
        } else {
            break;
        }
    }
}
handleWhileWithBreak();


/***** For *****/
function handleFor() {
    for (let i = 1; i < 20; i++) {
        console.log(i);
    }
}
handleFor();

function handleForWithContinue() {
    for (let i = 1; i < 100; i++) {
        if (i > 19) continue;
        console.log(i);
    }
}
handleForWithContinue();
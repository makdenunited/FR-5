let i=1;

function cycleWhile() {
    while (i<20) {
    console.log(i);
    i+=1;
    }
}


let j=1;

function cycleDowhile() {
    do {
    console.log(j);
    j+=1;
    } while (j<20)
}


function cycleFor() {
    for (let k=0; k<20; k++) {
    console.log(k);
    }
}


cycleWhile()
cycleDowhile()
cycleFor()
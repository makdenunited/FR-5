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


function showResult(odd, even, iter) {
    return console.log(`В диапазоне чисел от 0 до ${iter}: четных чисел - ${even}, нечетных - ${odd} `)
}

function countingNumbers (iter) {
    let odd=0;
    let even=0;
    for (let i=0; i<=iter; i++) {
        if (i % 2 == 0) {
            even+=1;
        } else {
            odd+=1;
        }
    }
    showResult(odd, even, iter)
}


countingNumbers(9)
// cycleWhile()
// cycleDowhile()
// cycleFor()
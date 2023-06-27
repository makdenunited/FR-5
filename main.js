let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < 13; i++) {
    if(i % 2 == 0) {
        evenCount = i;
        console.log('чётные');
        console.log(evenCount)
    }
}

for (let i = 0; i < 13; i++) {
    if(i % 2 != 0) {
        oddCount = i;
        console.log('нечётные');
        console.log(oddCount);
    }
}


//сумма чисел от 1 до 100 с циклом while

const max = 100;
let i = 1;
let sum = 0;

while(i < max + 1){
    sum += i;
    i++; 
}
console.log(sum);


//сумма чисел от 1 до 100 с циклом for 

let res = 0;

for(let k = 1; k < max + 1; k++){
    res += k;
}
console.log(res);


//вывод чётных чисел от 1 до 10;


let j = 1;
while(j <= 10){
    if(j % 2 == 1){
        j++; 
        continue;
    }
    console.log(j);
    j++;
}
const MULTY = 'multy';
const ADD = 'add';
const SUBTRACT = 'subtract';

function calt(operation, FirstNumber, SecondNumber) {

    if(typeof FirstNumber != 'number' || typeof SecondNumber != 'number') {
       return alert('Введены не коректные данные')       
    } 

    switch (operation) {
        case 'add':
            return FirstNumber + SecondNumber;

        case 'multy':
            return FirstNumber * SecondNumber;
        
        case 'subtract':
            return FirstNumber - SecondNumber;        
    }
}

calt(ADD, 1, 2);
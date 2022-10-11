let current = document.getElementById('current')
let last = document.getElementById('last')
let digit = document.getElementsByClassName('digit')
let operator = ''
let currentOperand = ''

function populate(){
    for (let number of digit){
        number.addEventListener('click',()=>{
            current.textContent += number.textContent
            console.log(current)
            
        })
    }
}

populate()




let add = (last,current)=> {
    return last+current
}
let subtract = (last,current)=> {
    return last-current
}
let multiply = (last,current)=> {
    return last*current
};
let divide = (last,current)=> {
    return last/current
};

function operate(last, current , operator){
    switch(operator){
        case '+': add(last,current);
            break;
        case '-': subtract(last,current)
            break;
        case '*': multiply(last,current)
            break;
        case '/': divide(last,current)
            break;
    }
}


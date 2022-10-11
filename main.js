let currentOperand = document.getElementById('current')
let lastOperand = document.getElementById('last')
let digit = document.getElementsByClassName('digit')
let operators = document.getElementsByClassName('operators')
let current = ''
let last = ''
let operator = ''
let enter = document.getElementById('enter')

////// Should let evaluate the result
enter.addEventListener('click',operate())

function populate(){
    ////// Prints numbers on screen and stores them as var current
    for (let number of digit){
        number.addEventListener('click',()=>{
            currentOperand.textContent += number.textContent
            current = currentOperand.textContent
            console.log(current)
            
        })
    }
    ///// Stores current number and let's you start entering second line while storing chosen operand
    for (let operation of operators){
        operation.addEventListener('click',()=>{
            operator = operation.textContent
            console.log(operator)
            lastOperand.textContent = currentOperand.textContent
            last = lastOperand.textContent
            console.log(last)
            currentOperand.textContent=''
           
            
        })
    }

}

populate()




let add = (last,current)=> {
    return last + current
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


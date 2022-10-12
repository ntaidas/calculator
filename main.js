let currentOperand = document.getElementById('current')
let lastOperand = document.getElementById('last')
let digit = document.getElementsByClassName('digit')
let operators = document.getElementsByClassName('operators')
let current = currentOperand.textContent
let last = lastOperand.textContent
let operator = ''
let enter = document.getElementById('enter')
let a = 0

function operate(last,current,operator){

    switch(operator){
        case '+': 
            lastOperand.textContent = last + current;;
            currentOperand.textContent = ''
            break;
       case '-':
        a = last - current;
            lastOperand.textContent = a;
            currentOperand.textContent = ''
            break;
        case '*':
            a = last * current;
            lastOperand.textContent = a;
            currentOperand.textContent = ''
            break;
        case '/':
            a = last / current;
            lastOperand.textContent = a;
            currentOperand.textContent = ''
            break;
    }
    current = Number(currentOperand.textContent)
    last = Number(lastOperand.textContent)
}

function populate(){
    ////// Prints numbers on screen and stores them as var current
    for (let number of digit){
        number.addEventListener('click',()=>{
            currentOperand.textContent += number.textContent
            current = Number(currentOperand.textContent)
            console.log(current)
            console.log(currentOperand)
            
        })
    }
    ///// Stores current number and let's you start entering second line while storing chosen operand
    for (let operation of operators){
        operation.addEventListener('click',()=>{
            operator = operation.textContent
            console.log(operator)
            if(last == false){
                lastOperand.textContent = currentOperand.textContent
                last = Number(lastOperand.textContent)
                console.log(last)
                currentOperand.textContent=''
                console.log('good')
            }
            else{
                operate(last,current,operator)
            }
            
           
            
        })
    }

}

populate()


let add = (a,b)=> {
    return a+b
}
let subtract = (a,b)=> {
    return a-b
}
let multiply = (a,b)=> {
    return a*b
}
let divide = (a,b)=> {
    return a/b
}
let operate = ''
function operate(a, b , operate){
    switch(a,b){
        case '+': add(a,b);
            break;
        case '-': subtract(a,b)
            break;
        case '*': multiply(a,b)
            break;
        case '/': divide(a,b)
            break;
    }
}


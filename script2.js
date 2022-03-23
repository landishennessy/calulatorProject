const add=function(num1,num2){
    return num1 + num2
}
const subtract=function(num1,num2){
    return num1 - num2
}
const multiply=function(num1,num2){
    return num2 * num1
}
const divide=function(num1,num2){
    if(num2 === 0){
        document.querySelector('.calculatorScreen').textContent = 'error';
        return "error"
    }
    return num1/num2
}

const operate = function(operator,num1,num2){    
    console.log('operate', num1, operator, num2)
    if(operator === '+'){
                console.log(add(num1,num2))
        return add(num1,num2);       
    }
    else if(operator === '-'){
       
        return subtract(num1,num2)
    }
    else if(operator === 'x'){
       
        return multiply(num1,num2)
    }
    else if(operator === '/'){
        
       return divide(num1,num2)
    }
    else{
        return 'error';
    }  
}

let val0 = '';
let val1 = '';
const prev = document.querySelector('.previousOperand');
let current =  document.querySelector('.currentOperand');
let displayValue = '';

onst buttons = document.querySelectorAll('.button');
buttons.forEach(button =>{
button.addEventListener('click', function handleClick(event){   
    appendNum(button.textContent)
});

const clear = document.querySelector('.calculatorClear')
clear.addEventListener('click', function handleClick(event){
    document.querySelector('.previousOperand').textContent = '';
    document.querySelector('.currentOperand').textContent = '';
})
});

function appendNum(num){
    current.textContent+=num
}
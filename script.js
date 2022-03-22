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
        console.log('operate', num1, operator, num2)
        return subtract(num1,num2)
    }
    else if(operator === 'x'){
        console.log('operate', num1, operator, num2)
        return multiply(num1,num2)
    }
    else if(operator === '/'){
        console.log('operate', num1, operator, num2)
       return divide(num1,num2)
    }
    else{
        return 'error';
    }
   
}

let displayValue = '';
let operatorValue = '';
let currentValue = '';
let val1 = '';
let val2 = '';
let vals = [];



const updateCurrent = function(num1){
    displayValue = num1;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button =>{
    button.addEventListener('click', function handleClick(event){       
        displayValue += button.textContent;
        console.log('display',displayValue)
        document.querySelector('.calculatorScreen').textContent = displayValue;
        vals.push(parseInt(button.textContent));

      
       // currentValue = button.textContent
        // if(val1 === ''){
        //     val1 = parseInt(button.textContent);
        //     
        //    // console.log('empty')
        // }
        // else{
        //     val2 = parseInt(button.textContent);
        //     vals.push(parseInt(button.textContent));
        //    // console.log(button.textContent)
        // }
       console.log(vals);
       val1=vals[0]
       val2=vals[1]
       
    });
   
});


// buttons.forEach(button =>{
//     button.addEventListener('click', function handleClick(event){       
//         document.querySelector('.calculatorScreen').textContent = button.textContent
//        // currentValue = button.textContent
//         if(val1 === ''){
//             val1 = parseInt(button.textContent);
//             vals.push(parseInt(button.textContent));
//            // console.log('empty')
//         }
//         else{
//             val2 = parseInt(button.textContent);
//             vals.push(parseInt(button.textContent));
//            // console.log(button.textContent)
//         }
//        console.log('currentVal=',currentValue,'val1= ',val1, 'val2 =',val2);
//     });
// });




const operators = document.querySelectorAll('.operator');
operators.forEach(operator =>{
    operator.addEventListener('click', function handleClick(event){
        displayValue += operator.textContent;
        operatorValue = operator.textContent
        console.log(operatorValue);

    });
});



const calculator=function(){
       
    if(val1 != '' || val2 != '' || operatorValue != ''){
    let calculation = operate(operatorValue,val1,val2,)
    document.querySelector('.calculatorScreen').textContent = calculation
    displayValue = calculation
    currentValue = calculation
    vals[0]=calculation;
    vals.pop();
    console.log('newarray',vals)
    console.log('calc',calculation)
   // console.log(val1,val2,operatorValue)
    }
    else{
        console.log('not enough things')
    }

}

const enter = document.querySelector('.calculatorEquals')
enter.addEventListener('click', function handleClick(event){
    calculator();
})
calculator();

const clear = document.querySelector('.calculatorClear')
clear.addEventListener('click', function handleClick(event){
    document.querySelector('.calculatorScreen').textContent = 'clear';
    vals=[];
    currentValue = 0;
    displayValue = '';
    console.log('clear')
})


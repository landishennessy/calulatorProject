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

let displayValue = '';
let operatorValue = '';
let currentValue = '';
let many = '';
let val1 = '';
let val2 = '';
let vals = [];

//     const buttons = document.querySelectorAll('.button');
//     buttons.forEach(button =>{
//     button.addEventListener('click', function handleClick(event){       
      
//         many += parseInt(button.textContent);
//       //  many += (button.textContent);
//         console.log('fuckup')
//         displayValue = many
//         document.querySelector('.calculatorScreen').textContent = many;
       
//        val1=vals[0]
//        val2=vals[1]       
//        console.log("buttons many", many)
//        console.log("buttons vals", vals)
//        vals.push(parseFloat(many))
//     });
   
// });
const buttons = document.querySelectorAll('.button');
buttons.forEach(button =>{
button.addEventListener('click', function handleClick(event){       
  
   // many += parseInt(button.textContent);
    many += (button.textContent);
    console.log('fuckup')
    displayValue = many
    document.querySelector('.calculatorScreen').textContent = many;
   
   val1=vals[0]
   val2=vals[1]       
   console.log("buttons many", many)
   console.log("buttons vals", vals)
   console.log('parsed',parseFloat(many))
  // vals.push(parseFloat(many));
  
});

});
const point = document.querySelector('.point')
point.addEventListener('click', function handleClick(event){  
    many += '.'
    console.log("point many", many)
       console.log("point vals", vals)
});

const operators = document.querySelectorAll('.operator');
operators.forEach(operator =>{
    operator.addEventListener('click', function handleClick(event){
        displayValue += operator.textContent;
       // many += operator.textContent;
        many = 0;
        operatorValue = operator.textContent;
        document.querySelector('.calculatorScreen').textContent = displayValue;
        console.log('pre push many', many)
        vals.push(parseFloat(many))
        console.log("operators many", many)
        console.log("operators vals", vals)
        many = 0;
    

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

    console.log("calculator many", many)
    console.log("calculator vals", vals)
    console.log('calc',calculation)
   
    }
    else{
        console.log('not enough things')
    }

}

const enter = document.querySelector('.calculatorEquals')
enter.addEventListener('click', function handleClick(event){
    vals.push(parseFloat(many))
    val1=vals[0]
    val2=vals[1]
    console.log('enter')
    console.log("enter many", many)
    console.log("enter vals", vals)
    calculator();
    // console.log("enter many", many)
    // console.log("enter vals", vals)
       if(vals.length > 1){
           console.log('pop')
           vals.pop()
       }
    console.log('vals',vals)
});

const clear = document.querySelector('.calculatorClear')
clear.addEventListener('click', function handleClick(event){
    document.querySelector('.calculatorScreen').textContent = '';
    vals=[];
    currentValue = 0;
    displayValue = '';
    many = '';
    console.log('clear')

    console.log("clear many", many)
    console.log("clear vals", vals)
})



    const del = document.querySelector('.del')
    del.addEventListener('click', function handleClick(event){
        console.log('del many', typeof (many))
        console.log(many.slice(0,-1))
        many = many.slice(0,-1);
        document.querySelector('.calculatorScreen').textContent = many;


        console.log('delete')

        console.log("delete many", many)
       console.log("delete vals", vals)
    });



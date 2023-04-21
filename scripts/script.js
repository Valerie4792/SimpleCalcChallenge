let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let addBtn = document.getElementById('addBtn');
let subtractBtn = document.getElementById('subtractBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let divideBtn = document.getElementById('divideBtn');
let sevenBtn = document.getElementById('sevenBtn');
let eightBtn = document.getElementById('eightBtn');
let nineBtn = document.getElementById('nineBtn');
let sixBtn = document.getElementById('sixBtn');
let fiveBtn = document.getElementById('fiveBtn');
let fourBtn = document.getElementById('fourBtn');
let threeBtn = document.getElementById('threeBtn');
let twoBtn = document.getElementById('twoBtn');
let oneBtn = document.getElementById('oneBtn');
let zeroBtn = document.getElementById('zeroBtn');
let clearBtn = document.getElementById('clearBtn');
let equalBtn = document.getElementById('equalBtn');

let display = document.getElementById('display');
let num1 = 0;
// build num1
let operator = '';
// save operator as string, and use logic to switch over to num2
let num2 = 0;
// build num2
let result;
// equal button will have the mathmatics of num1 and num2, if or switch statement will be used

// operator buttons
addBtn.addEventListener('click', function(e){

    
    if (operator === '') {
        num1 = parseFloat(display.value);
        operator = '+';
        display.value = num1 + operator;
    
        
      }
    else if(operator==='+'){
        num2 = parseFloat(display.value);
        display.value = num1 + operator + num2

    }
     

});
subtractBtn.addEventListener('click', function(e){
    if (operator === '') {
        num1 = parseFloat(display.value);
        operator = '-';
        display.value = num1 + operator;
    
        
      }
    else if(operator==='-'){
        num2 = parseFloat(display.value);
        display.value = num1 + operator + num2

    }
});
multiplyBtn.addEventListener('click', function(e){
    if (operator === '') {
        num1 = parseFloat(display.value);
        operator = '*';
        display.value = num1 + operator;
    
        
      }
    else if(operator === '*'){
        num2 = parseFloat(display.value);
        display.value = num1 + operator + num2

    }
});
divideBtn.addEventListener('click', function(e){
    if (operator === '') {
        num1 = parseFloat(display.value);
        operator = '/';
        display.value = num1 + operator;
    
        
      }
    else if(operator==='/'){
        num2 = parseFloat(display.value);
        display.value = num1 + operator + num2;

    }
});

//End of Operators

//Number Buttons

sevenBtn.addEventListener('click', function(e){
    display.value += '7';

})
eightBtn.addEventListener('click', function(e){
    display.value += '8';

})
nineBtn.addEventListener('click', function(e){
    display.value += '9';

})
sixBtn.addEventListener('click', function(e){
    display.value += '6';

})
fiveBtn.addEventListener('click', function(e){
    display.value += '5';

})
fourBtn.addEventListener('click', function(e){
    display.value += '4';

})
threeBtn.addEventListener('click', function(e){
    display.value += '3';

})
twoBtn.addEventListener('click', function(e){
    display.value += '2';

})
oneBtn.addEventListener('click', function(e){
   display.value += '1';

})
zeroBtn.addEventListener('click', function(e){
    display.value += '0';

})

//

clearBtn.addEventListener('click', function(e) {
    display.value = "";
    num1 = 0
    num2 = 0
    result = 0
    operator = '';


  });


equalBtn.addEventListener('click', function(e){
  
    result = eval(display.value);
    display.value = result;
  
})


let calc = {
    op1 : null,
    operand : null,
    op2 : null,
};

const display = document.querySelector(".display")
let calculation = "";



//stores operand1
function getOperand(e){

    // If the operator is already assigned, we have to take read operand 2
    if (calc.operand != null){
        if (calc.op2 != null){
            calc.op2 += e.target.outerText;
            calculation += calc.op2;
            display.textContent = calc.op2;
        }    
        else{
            calc.op2 = e.target.outerText;
            calculation += calc.op2;
            display.textContent = calc.op2;
        }
    }
    // For reading operand1
    else if (calc.op1 != null){
        calc.op1 += e.target.outerText;
        calculation += calc.op1;
        display.textContent = calc.op1;
    }
    else if (calc.op1 == null){
        calc.op1 = e.target.outerText;
        calculation += calc.op1;
        display.textContent = calc.op1;
    }
    console.log(calc.op1);
}

function sum(){
    calc.op1 = parseInt(calc.op1) + parseInt(calc.op2);
    display.textContent = calc.op1;
    calc.operand = null;
    calc.op2 = null;
    
}

function substract(){
    calc.op1 = parseInt(calc.op1) - parseInt(calc.op2);
    display.textContent = calc.op1;
    calc.operand = null;
    calc.op2 = null;
    
}

function multiply(){
    calc.op1 = parseInt(calc.op1) * parseInt(calc.op2);
    display.textContent = calc.op1;
    calc.operand = null;
    calc.op2 = null;
    
}

function divide(){
    calc.op1 = parseInt(calc.op1) / parseInt(calc.op2);
    display.textContent = calc.op1;
    calc.operand = null;
    calc.op2 = null;
    
}

function operate(){

    if (calc.operand == '+')
        sum();
    else if (calc.operand == '-')
        substract();
    else if (calc.operand == 'x')
        multiply();
    else if (calc.operand == '/')
        divide(); 
    
}


// Stores operator
function getOperator(e){
    if(e.target.outerText == "="){
        operate();
        //calc.op1 = null;
    }
    
    else if(e.target.outerText == "C"){
        calc.op1 = "";
        calc.op2 = null;
        calc.operand = null;
        display.textContent = "";
        console.log("Is this working");   
    }

    // if there is no operator
    else if (calc.operand == null){
        calc.operand = e.target.outerText;
        calculation += calc.operand;
        display.textContent = calc.operand;
        console.log(calc.operand);
    }

    else {
        // if there is an operator but no operand 2, so the operand just gets reassigned
        if (calc.op2 == null){
            calc.operand = e.target.outerText;
            calculation += calc.operand;
            display.textContent = calc.operand;
        }
        // when there is op1, op2 and operand we have to calculate the problem before assigning
        else{
            operate();
            calc.operand = e.target.outerText;
            calculation += calc.operand;
            display.textContent = calc.operand;
            console.log(calc.operand);
        }
    }
}

// Selects keys and adds event listners to it
let keys = document.querySelectorAll('[data-key]');
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", getOperand);
}

// Selects operators and adds event listeners
let oper = document.querySelectorAll('.operation');
for (let i = 0; i < oper.length; i++){
    oper[i].addEventListener("click", getOperator);
}


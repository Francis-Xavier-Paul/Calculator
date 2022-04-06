/* function npressed(e){
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!key) return;
    console.log(key.innerText);
}

function nclicked(e){
    console.log(e);
}

for(let i = 0; i < 10; i++){
    const number = []; 
    number[i] = document.querySelector(`div[data-key="${i+48}"]`);
    number[i].addEventListener('click', nclicked);
}

window.addEventListener('keydown', npressed); 
*/


let calc = {
    op1 : "",
    operand : null,
    op2 : null,
};

function operator(e){
    if (calc.op1 != null)
        calc.op1 += e.target.outerText;
    else
        calc.op1 = e.target.outerText;
    console.log(calc.op1);
}

let keys = document.querySelectorAll('[data-key]');
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", operator);
}

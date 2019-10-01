let newValue = result = operator = null;
let textarea = document.getElementById("textarea");
let buttonSum = document.getElementById("sum");
let buttonSubtract = document.getElementById("subtract");
let buttonMultiply = document.getElementById("multiply");
let buttonDivide = document.getElementById("divide");
let buttonCalculate = document.getElementById("calculate");
let buttonClean = document.getElementById("clean");
let buttonDot = document.getElementById("dot");

buttonSum.onclick = function(){
    makeTheOperation('+');
};

buttonSubtract.onclick = function(){
    makeTheOperation('-');
};

buttonMultiply.onclick = function(){
    makeTheOperation('*');
};

buttonDivide.onclick = function(){
    makeTheOperation('/');
};

buttonCalculate.onclick = function(){
    makeTheOperation(null);
    textarea.value = result;
};

buttonClean.onclick = function(){
    newValue = result = operator = null;
    textarea.value = "";
};

buttonDot.onclick = function(){
    textarea.value += ".";
};

function putNumber(number){
    textarea.value += number;
};

function makeTheOperation(operator){
    newValue = Number(textarea.value);
    calculate(newValue);
    window.operator = operator;
    textarea.value = "";
};

function calculate(value){
    switch(operator){
        case "+" :
            result += value;
            break;
        case "-" :
            result -= value;
            break;
        case "*" :
            result *= value;
            break;
        case "/" :
            result /= value;
            break;
        case null:
            result = value;
            break;
    };
};

// allow only numbers in textarea (jQuery)
 jQuery = $('textarea').keypress(function (e) {
    var a = [];
    var k = e.which;
    for (i = 48; i < 58; i++) {
        a.push(i);
    }
    if (!(a.indexOf(k) >= 0)) {
        e.preventDefault();
    }
});


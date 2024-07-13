const display = document.querySelector("#display");

function showOnDisplay(input){
    display.value += input;
}

function cleard(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}
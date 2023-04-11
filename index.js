let counter = 0
let counterDisplay = document.getElementById("counter-display")
function add1(){
    counter++;
    counterDisplay.innerHTML = counter;
}
function subtract1(){
    counter--;
    counterDisplay.innerHTML = counter;
}
function add5(){
    counter+=5;
    counterDisplay.innerHTML = counter;
}
function subtract5(){
    counter-=5;
    counterDisplay.innerHTML = counter;
}
function addInput(){
    let nInput = Number(document.getElementById("nInput").value)
    counter = counter + nInput
    counterDisplay.innerHTML = counter
}
function subtractInput(){
    let nInput = Number(document.getElementById("nInput").value)
    counter = counter - nInput
    counterDisplay.innerHTML = counter
}
function resetCounter(){
    counter = 0
    counterDisplay.innerHTML = counter
}
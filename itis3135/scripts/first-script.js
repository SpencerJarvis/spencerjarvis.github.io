
//Lauches on Page Startup
    var userName = prompt("What is your name?");
    var userMessage = prompt("How are you doing today?")
    var today = new Date();
    var t = today.getHours() + ":" + today.getMinutes();
    document.write("Today is " + today.toDateString()+", and the time is: "+ t + ". The Basic Calculator Company welcomes you, "+ userName +". We're glad you are doing " + userMessage + "!");

function add() {
    let number1 = parseInt(prompt("Enter a first number: "));
    let number2 = parseInt(prompt("Enter a second number: "));
    let sum=number1+number2;
    alert(sum);
}

function sub() {
    let number1 = parseInt(prompt("Enter a first number: "));
    let number2 = parseInt(prompt("Enter a second number: "));
    let total=number1-number2;
    alert(total);
}

function multiply() {
    let number1 = parseInt(prompt("Enter a first number: "));
    let number2 = parseInt(prompt("Enter a second number: "));
    let total=number1*number2;
    alert(total);
}

function divide() {
    let number1 = parseInt(prompt("Enter a first number: "));
    let number2 = parseInt(prompt("Enter a second number: "));
    let total=number1/number2;
    alert(total);
}

function divideMod() {
    let number1 = parseInt(prompt("Enter a first number: "));
    let number2 = parseInt(prompt("Enter a second number: "));
    let total=number1%number2;
    alert(total);
}
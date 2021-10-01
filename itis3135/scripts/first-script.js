
//Lauches on Page Startup
function opening(){
    var userName = prompt("What is your name?");
    var userMessage = prompt("How are you doing today?")
    var today = new Date();
    var t = today.getHours() + ":" + today.getMinutes();
    document.write("Today is " + today.toDateString()+", and the time is: "+ t + ". Silly Jellyfish Productions Co. welcomes you, "+ userName +". We're glad you are doing " + userMessage + "!");
}

//Confirms user is over the age of 18
function age() {
    var age = parseInt(prompt("Enter your age: "));
    if (age>=18)
    {
        alert("Congratulations! You may apply for our services!");
    }
    else
    {
        alert("Sorry, you must be 18 or older to apply for our services.");
    }
}

//Cost for the Normal Plan
function costNormal() {
    var total;
    var days = parseInt(prompt("For the Normal Plan: How many days do you want the ads to run?"));
    total= days * 3000;
    alert("Your total cost is: $"+total);
}

//Cost for the Fast Plan
function costFast() {
    var total;
    var days = parseInt(prompt("For the Fast Plan: How many days do you want the ads to run?"));
    total= days * 5000;
    alert("Your total cost is: $"+total);
}

//Guess how many views 
function guesser() {
    var guess = parseInt(prompt("Guess how many views all our ads have recieved:"));
    if (guess>=100000000)
    {
        alert("Correct! We have recieved over 100 million views on our ads!");
    }
    else
    {
        alert("Incorrect! We have recieved over 100 million views on our ads!");
    }
    
}

//Feedback 
function feedback() {
    prompt("Do you have any feedback for us?");
    alert("Thank you for your feedback!")
}
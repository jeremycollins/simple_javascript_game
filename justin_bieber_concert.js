// Check if the user is ready to play!
confirm("Are you ready to play?");

var age = prompt("What is your age?");
if(age < 13) {
    console.log("Please ask your guardian if it is okay for you to play along.");
}
else {
    console.log("Awesome! Good luck, friend!");
}

console.log("Imagine that you are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?");

if(userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
};

var feedback = prompt("Please rate this game out of 10, where 10 is the greatest.");

if(feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
}
else {
    console.log("I'll keep practicing coding and racing.");
};

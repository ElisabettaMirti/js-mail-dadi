
let computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(computerNumber);

let userNumber =  Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

if (computerNumber > userNumber) {
    console.log("I won!")
} else if (userNumber > computerNumber) {
    console.log("You won!")
} else if (computerNumber === userNumber) {
    console.log("That's a tie!")
}
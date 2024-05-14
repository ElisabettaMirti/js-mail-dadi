let numberList = [""];

for (let i = 0; i < 6; i++ ) {
    let userNumber = number.parseInt(prompt("Type a number"))

    if (userNumber % 2 === 0) {
        numberList.push(userNumber)
    }
}

console.log(numberList)
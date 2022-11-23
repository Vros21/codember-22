let lowest = 11098;
let biggest = 98123;
let possiblePass = []

do {
    let lowestStr = (lowest + '')
    let firstCond = false;
    let secondCond = false;
    (lowestStr.split("5").length - 1) >= 2 ? firstCond = true : firstCond = false

    if
        (
        lowestStr[0] >= 1
        &&
        lowestStr[1] >= lowestStr[0]
        &&
        lowestStr[2] >= lowestStr[1]
        &&
        lowestStr[3] >= lowestStr[2]
        &&
        lowestStr[4] >= lowestStr[3]
    ) {
        secondCond = true
    }

    if (firstCond && secondCond) {
        possiblePass.push(lowest)
    }
    lowest++;
} while (lowest <= biggest)

console.log(`submit ${possiblePass.length}-${possiblePass[55]}`)
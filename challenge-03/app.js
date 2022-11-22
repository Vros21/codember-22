import data from './response.js';

let importedData = await data();
let colors = JSON.parse(importedData)
let lastColor = "";
let patterLenght = 0;

for (let i = 0; i < colors.length; i++) {
    let counter = 2;
    for (let j = i + 2; j < colors.length; j = j + 2) {
        if (colors[i] === colors[j]) {
            counter++;
            if (counter > patterLenght) {
                patterLenght = counter;
                lastColor = colors[j]
            }
        } else break

        if (colors[j + 1] === colors[i + 1]) {
            counter++
            if (counter > patterLenght) {
                patterLenght = counter
                lastColor = colors[j + 1]
            }
        } else break
    }
}
console.log(`The longest pattern has ${patterLenght} colors. And the last color is ${lastColor}`)

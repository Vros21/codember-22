import encryptedMessage from './response.js';

let message = await encryptedMessage();
let wordsArray = message.split(' ')
let charsCode = []
let phrase = [];

wordsArray.forEach(word => {
    for (let i = 0; i < word.length; i) {
        if (word[i] != '1') {
            charsCode.push(word[i] + word[i + 1])
            i = i + 2;
        }
        if (word[i] === '1') {
            charsCode.push(word[i] + word[i + 1] + word[i + 2])
            i = i + 3;
        }
    }
    charsCode.push(" ")
})

charsCode.forEach(charCode => {
    let letter = String.fromCharCode(parseInt(charCode))
    phrase.push(letter)
})

console.log(phrase.join(''))


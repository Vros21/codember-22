import encryptedMessage from './response.js';

//let message = await encryptedMessage();
let message = '83101 113117105101110 101114101115 84101 9911111011112299111 84117 110111 109101 9911111011199101115 97 109105 84101 101115116111121 1119811510111411897110100111 84101 101115116111121 115105103117105101110100111 81117105101114101115 10611710397114 7411710110397 99111110109105103111 8697108101 8697109111115 97 10611710397114 691061019911711697 101115116101 9911110997110100111 101110 10897 11610111410910511097108 11511798109105116 116561181061045651505752561029911097108'
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


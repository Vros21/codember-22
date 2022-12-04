import response from './response.js';

let data = await response();
let indexedUsers = data.map((user, index) => {
    return { index, user }
})

while (indexedUsers.length > 1) {
    let odd = indexedUsers.length % 2 !== 0
    indexedUsers = indexedUsers.filter((user, index) => index % 2 === 0)
    if (odd) {
        indexedUsers.shift()
    }
}

console.log(`submit ${indexedUsers}`)
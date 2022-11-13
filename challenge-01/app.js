import getUsers from './response.js';

const REQUIRED_KEYS = ['usr:', 'eme:', 'psw:', 'loc:', 'age:', 'fll:']

let users = await getUsers();
let validUsers = users.filter(user => REQUIRED_KEYS.every(key => user.includes(key)))
let length = validUsers.length;
let lastUser = validUsers[length - 1].replaceAll('\n', ' ');
let lastUserName = lastUser.slice(lastUser.indexOf(REQUIRED_KEYS[0]) + REQUIRED_KEYS[0].length, lastUser.indexOf(' '))

console.log(`${length}${lastUserName}`)
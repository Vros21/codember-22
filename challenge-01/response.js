export default async function getUsers() {
    let response = await fetch('https://codember.dev/users.txt')
    let text = await response.text()
    return text.split('\n\n')
}
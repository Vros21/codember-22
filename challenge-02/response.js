export default async function encryptedMessage() {
    let response = await fetch('https://codember.dev/encrypted.txt')
    let text = await response.text()
    return text
}
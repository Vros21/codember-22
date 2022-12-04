export default async function response() {
    let response = await fetch('https://codember.dev/mecenas.json')
    let text = await response.json();
    return text
}
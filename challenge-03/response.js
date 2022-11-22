export default async function data() {
    let response = await fetch('https://codember.dev/colors.txt')
    let text = await response.text();
    return text
}
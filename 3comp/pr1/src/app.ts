let userName = "Bob"
// userName = 5

console.log('userName', userName)

let age: number
age = 5

// const btn = document.querySelector('button')
// if (btn) {
//     btn.addEventListener('click', () => {
//         console.log('Clicked')
//     })
// }

// const btn = document.querySelector('button')!
// btn.addEventListener('click', () => {
//     console.log('Clicked')
// })


const btn = document.querySelector('button')!
let appId = 'id'
const clickHandler = (message: string) => {
    // const clickHandler = (message: string, age: number) => {
    // let userName = 'Bob'
    console.log('Clicked ' + message)
}
btn.addEventListener('click', clickHandler.bind(null, "Hello"))
// btn.addEventListener('click', clickHandler.bind(null, "Hello", 30))

function add(n1: number, n2: number) {
    if ((n1 + n2) > 0) {
        return n1 + n2
    }
    return
}
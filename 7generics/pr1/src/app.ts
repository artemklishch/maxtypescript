// const names: Array<string> = []
// // names[0].split(' ')

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 2000)
// })
// promise.then(data => {
//     // data.split("")
// })





// function merge<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB)
// }
// const mergedObj = merge<{ name: string, hobbies: string[] }, { age: number }>({ name: "Max", hobbies: ["sport"] }, { age: 30 })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}
const mergedObj = merge({ name: "Max", hobbies: ["sport"] }, { age: 30 })
const mergedObj2 = merge({ name: "Bob" }, { age: 30 })
// const mergedObj3 = merge({ name: "Bob1" }, 30)
console.log(mergedObj.name)


interface Lengthy {
    length: number
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = 'Got no value!'
    if (element.length === 1) {
        description = 'Got 1 element.'
    } else if (element.length > 0) {
        description = 'Got ' + element.length + " element."
    }
    return [element, description]
}
console.log(countAndDescribe("Hi there"))
console.log(countAndDescribe("Hi there"))
// console.log(countAndDescribe(10))



function ectractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "Value " + obj[key]
}
ectractAndConvert({ name: "Bob" }, 'name')
// ectractAndConvert({}, 'name')
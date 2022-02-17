function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Resault is ' + num);
}
function printResult1(num) {
    console.log('Resault is ' + num);
    return;
}
printResult(add(5, 5));
// let someValue: undefined;
// let combineValues: Function;
var combineValues;
combineValues = add;
// combineValues = 5;
// combineValues = printResult
console.log(combineValues(8, 8));

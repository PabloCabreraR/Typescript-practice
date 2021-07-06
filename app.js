function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result " + num);
}
// function printResult(num: number): undefined {
//     console.log("Result " + num)
//     return
// }
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(8, 4, function (result) {
    console.log(result);
});
printResult(add(5, 12));
// let combinesValues: Function  // Any function.
var combinesValues; // Declaring combineValues will only store a function with 2 number arguments and returns a number.
combinesValues = add;
// combinesValues = printResult
// combinesValues = 5
console.log(combinesValues(8, 8));

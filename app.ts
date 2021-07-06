function add(n1: number, n2: number){
    return n1 + n2
}

function printResult(num: number): void { // Void means the function doesnt return anything
    console.log("Result " + num)
}
// function printResult(num: number): undefined {
//     console.log("Result " + num)
//     return
// }

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2
    cb(result)
}

addAndHandle(8, 4, (result)=>{
    console.log(result)
})

printResult(add(5,12))

// let combinesValues: Function  // Any function.
let combinesValues: (a: number, b: number) => number // Declaring combineValues will only store a function with 2 number arguments and returns a number.

combinesValues = add
// combinesValues = printResult
// combinesValues = 5

console.log(combinesValues(8,8))
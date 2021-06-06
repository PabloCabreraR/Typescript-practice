function add(a:number, b:number):number{
    return a + b
}

function product(a:number, b:number):number{
    return a * b
}

function substract(a:number, b:number):number{
    return a - b
}

function showConsole():void{
    console.log(addition, substraction, multiplication)
}

let addition:number = add(2,7)
let substraction:number = substract(10,8)
let multiplication:number = product(5,5)

showConsole()
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
    console.log(addition)
    console.log(substraction)
    console.log(multiplication)
    sayHello("Pablo", 27)
}

const sayHello = (name:string, age:number = 25):void => {
    console.log(`Hello ${name}, you are ${age} years old.`)
}


let addition:number = add(2,7)
let substraction:number = substract(10,8)
let multiplication:number = product(5,5)

showConsole()
function add(a, b) {
    return a + b;
}
function product(a, b) {
    return a * b;
}
function substract(a, b) {
    return a - b;
}
function showConsole() {
    console.log(addition);
    console.log(substraction);
    console.log(multiplication);
    sayHello("Pablo", 27);
}
var sayHello = function (name, age) {
    if (age === void 0) { age = 25; }
    console.log("Hello " + name + ", you are " + age + " years old.");
};
var addition = add(2, 7);
var substraction = substract(10, 8);
var multiplication = product(5, 5);
showConsole();

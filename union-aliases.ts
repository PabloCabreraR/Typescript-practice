type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'


function combine(input1: Combinable,input2: Combinable, resultConversion: ConversionDescriptor) { // Literal types and union type.
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number"){
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
    // if (resultConversion === "as-number"){
    //     return +result
    // } else {
    //     return result.toString()
    // }
}

const combinesAges = combine(30, 27, "as-number")
console.log(combinesAges)

const combinesNames = combine('Pablo', "Ana", "as-text")
console.log(combinesNames)


const combinesStringAges = combine('30', "27", "as-number")
console.log(combinesStringAges)
// const person: {
//     name: string
//     age: number
// } = {
//     name: "Pablo",
//     age: 27,
// }


// const person: {
//     name: string
//     age: number
//     hobbies: string[]
//     role: [number, string] // Tuple, fixed length and fixed types.
// } = {
//     name: "Pablo",
//     age: 27,
//     hobbies: ["Sports", "Cookies"],
//     role: [2, 'author']
// }

enum Role {ADMIN = 2, READ_ONLY, AUTHOR}

const person = {
    name: "Pablo",
    age: 27,
    hobbies: ["Sports", "Cookies"],
    role: Role.ADMIN
}

console.log(person.name)

let favouriteActivities: string[]
favouriteActivities = ["Sports"]

let recipes: any[]
recipes = ["Pasta", 23]

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}


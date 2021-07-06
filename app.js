// const person: {
//     name: string
//     age: number
// } = {
//     name: "Pablo",
//     age: 27,
// }
var person = {
    name: "Pablo",
    age: 27,
    hobbies: ["Sports", "Cookies"],
    role: [2, 'author']
};
console.log(person.name);
var favouriteActivities;
favouriteActivities = ["Sports"];
var recipes;
recipes = ["Pasta", 23];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}

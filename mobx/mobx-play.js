const {observable, autorun} = require("mobx")



// // objects example
// let Person = (name) => {
//   let obj = {
//     name,
//     age: 42,
//     showAge: false,
//     labelText: () => obj.showAge ? `${obj.name} (age: ${obj.age})` : obj.name
//   }
//   return observable(obj)
// }
//
// let Dave = Person('Dave')
// console.log(Dave)
// autorun( () => console.log(Dave.labelText) )
//
// Dave.name = "Dave"
//
// Dave.age = 21
// Dave.showAge = true

var arr = observable(['hi', 'yes'])
var arr1 = arr.peek()

console.log(arr1.constructor === Array);

//
// // Arrays example
// const todos = observable([
//     { title: "Spoil tea", completed: true },
//     { title: "Make coffee", completed: false }
// ])
//
// autorun(() => {
//   console.log("Remaining:", todos
//     .filter(todo => !todo.completed)
//     .map(todo => todo.title)
//     .join(", ")
//     )
// })
//
// todos[0].completed = false
//
// todos[2] = { title: 'Take a nap', completed: false }
//
// todos.shift()

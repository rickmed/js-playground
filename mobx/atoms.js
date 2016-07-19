import {observable, autorun, computed, toJSON} from "mobx"

// let obj = observable({
//   hello: 4,
//   yes: 5
// })
//
// let ob2 = toJSON(obj)
//
// ob2.epale = 6
//
// autorun(() => console.log(toJSON(obj)))
// let obj2 = Object.assign({}, obj)
//
// console.log(obj2)

/* other example */
var numbers = observable([1, 2, 3])
// var sum = computed(() => numbers.reduce((a, b) => a + b, 0))

autorun(() => console.log(numbers.slice()))

// var disposeSum = autorun(() => {
//   console.log(sum.get())
//   console.log(numbers.peek())
// })
// prints '6'
numbers.push(4)
// prints '10'
//
// disposeSum()
// numbers.push(5)
// won't print anything, nor is `sum` re-evaluated

// import {observe, extendObservable} from 'mobx'
//
// const person = observable({
//   firstName: "Ricardo",
//   lastName: "Luther"
// })
//
// const disposer = observe(person, (change) => {
//   // console.log(change.type, change.name, "from", change.oldValue, "to", change.object[change.name])
//   console.log(change.object)
// })
//
// extendObservable(person, {
//   age: 353
// })
// person.lastName =  "Tom"
// // Prints: 'update firstName from Maarten to Martin'
//
// disposer()
// // Ignore any future updates
//
// // observe a single field
// const disposer2 = observe(person, "lastName", (newValue, oldValue) => {
//   console.log("LastName changed to ", newValue)
// })

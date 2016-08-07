// class Animal {
//   constructor(size, name) {  // attach properties
//     // you could validate props here...
//     this.size = size
//     this.name = name
//   }
//
//   bark(yourName) {
//     console.log(`Hello ${yourName}. My name is ${this.name}`)
//   }
// }
//
// console.log(Animal)
//
// const wuffles = new Animal(54, 'wuffles')
//
// console.log(wuffles)
// console.log(wuffles.size)
// wuffles.bark('Ricky')


/*
Inheritance
 */

class Employee {
  constructor(firstName, familyName, pet = 'charlie') {
    this._firstName = firstName
    this._familyName = familyName
    this._pet = pet

  }

  getFullName() {
    return `${this._firstName} ${this._familyName}`
  }
}

class Manager extends Employee {
  constructor(firstName, familyName = 'perez') {
    super(firstName, familyName)  // calls the parent constructor()
    this._managedEmployees = []
  }

  addEmployee(employee) {
    this._managedEmployees.push(employee)
  }
}



console.log(Employee)
const diego = new Manager()
console.log(diego)
diego.addEmployee('carlos perez')
console.log(diego._managedEmployees)
console.log(diego.getFullName())

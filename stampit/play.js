const { compose, methods, init } = require('stampit').default

const InitFoo = init({
  init1 ({name}) {
    // this.foo = 'foo prop overwritten'
    // console.log('**Initializing Foo with name: !**', name)
  },
  init2 ({age}) {
    // console.log('**Initializing Foo Again. Your age:!**', age)
  }
})

const HasFoo = compose({
  properties: {
    foo: 'default foo!'
  }
})


const obj = HasFoo()  // { foo: 'default foo!' }

const PrintFoo = methods({
  printFoo() {
    console.log(this.foo || 'There is no foo')
  },
  LogFoo() {
    console.log(this.foo || 'There is no foo')
  },
})
// or...
// const PrintFoo = compose({
//   methods: {
//     printFoo() {
//       console.log(this.foo || 'There is no foo')
//     }
//   }
// })

// const obj2 = PrintFoo()
// obj2.printFoo() // There is no foo


const Foo = compose(InitFoo, HasFoo, PrintFoo)

// or....
// const Foo = HasFoo.compose(PrintFoo)
// const Foo = PrintFoo.compose(HasFoo)
const obj3 = Foo({name: 'Ricky', age: 31})
console.log(obj3.hasOwnProperty('foo'))
obj3.printFoo() // default foo!


// const BindAllMethods = init(function () {
//   Object.keys(Object.getPtototypeOf(this))
//   .filter(key => typeof this[key] === 'function')
//   .forEach(key => {
//     this[key] = this[key].bind(this)
//   })
// })
//
// const bindedFoo = compose(BindAllMethods, HasFoo, PrintFoo)
//
// const obj4 = bindedFoo()
//
// obj4.printFoo()

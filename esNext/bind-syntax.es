const obj = {
  prop: 'hi',
  method1() {
    console.log(this)
  }
}

/*
function call
*/

function size() {
  console.log(this.size)
}

const car = {
  size: 10,
  name: 'ford'
}

// if an Object precedes ::, it turns into call
car::size() // -> 10
// size.call(car)
car::obj.method1() // -> car {...}
// obj.method1.call(car)


/*
method extraction
 */

 // if an nothing precedes ::, it needs to be a method. It is binds it then.
const fn = ::obj.method1
// obj.method1.bind(obj)
fn()  // -> obj {...}

const log = ::console.log
new Promise( res => res(23)).then(log)
// newFn = console.log.bind.(console)
// then calls the newFn with all the args provided by then

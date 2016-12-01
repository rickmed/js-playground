const most = require('most')



const num$ = most.from([1, 2, 3])
console.dir(num$.__proto__)

// function* gen() {
//     for(i=1;; ++i) {
//         yield i;
//     }
// }
// const num$ = most.from(gen())
// console.dir(num$.source.iterable)

// const plus1$ = num$.map(x => x + 1)
// console.log(num$.map.toString())

// console.log(plus1$.observe.toString())
// plus1$.observe(console.log)

const mostProm = num$
  // .take(10)
  // .subscribe({
  //   next: x => console.log(x)
  // })
  // .forEach(console.log)
  .observe(console.log)

  .then(() => console.log('Stream Completed dude!'))
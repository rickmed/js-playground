// import {Observable} from 'rxjs' // import most common parts

// or

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of'

//
// let obs = Observable.of(1, 2, 3)
// .map( x => x + '!!!' )
//
// obs.subscribe( x => console.log(x) )

console.log('started');
var source = Observable.interval(1000).take(5)
  .flatMap( (x, i) =>
    Observable
      .interval(2000)
      .take(x).map( () => i )
  )

source.subscribe(
  (x) => console.log('Next: %s', x),
  null,
  () => console.log('Completed')
)

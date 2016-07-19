import Rx from 'rx'

var obs1 = Rx.Observable.throw(new Error('error'))
var obs2 = Rx.Observable.return(42)

var source = Rx.Observable.catch(obs1, obs2)

source.subscribe(
  x => console.log('Next: ' + x.toString()),
  err => console.log('HEYYY: ' + err),
  () => console.log('Completed')
)

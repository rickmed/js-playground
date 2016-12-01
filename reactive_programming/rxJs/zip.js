import {Observable} from 'rxjs'

console.log('started')
var uno$ = Observable.range(0, 6)
.do(x => console.log('uno$: ' + x))

var dos$ = Observable.from(['dogs', 'cats', 'horses', 'mouse'])
.do(x => console.log('dos$: ' + x))

var tres$ = Observable.interval(1000).take(3)
.do(x => console.log('tres$: ' + x))

tres$.zip(uno$, dos$,
  (tres, dos, uno) => JSON.stringify({uno, dos, tres}, null, 2)
)
.do(x => console.log('zip$: ' + x))
.subscribe()

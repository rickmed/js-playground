// import Rx from 'rxjs'
// Rx.config.longStackSupport = true
//
const log = x => console.log(x)
//
// var seq = Rx.Observable.interval(1000)
// seq.subscribe(log)
//
// var bufCount_ = seq.bufferWithCount(5)
//
// // bufCount_
// //     .map( arr => arr.reduce( (acc, x) => acc + x, 0) )
// //     .subscribe(log)
//
// // the buffer will return an array of values on each event which you can
// // reduce
//
//
// var bufTime_ = seq.bufferWithTime(2000)
//
// bufTime_
//     .map( arr => arr.reduce( (acc, x) => acc + x, 0) )
//     .subscribe(log)

// idem but buffer for 3 seconds instead of 5 values received

import {Observable} from 'rxjs'
import 'rxjs/add/operator/timeInterval'

// delay items
Observable.from(['dogs', 'mice', 'food', 'buildings', 'pizza', 'burger'])
  // .delay(1000) // delay the stream, keeping relative time between items
  .zip(Observable.timer(500, 2000), x => x )  // delay relative inbetween time with initial 500 delay.
  .delayWhen()
  .timeInterval()
  .do(x => console.log(x.interval, x.value))
  .subscribe()

import Rx from 'rx'
Rx.config.longStackSupport = true

function log (x) { console.log(x) }

var source1 = Rx.Observable.range(0, 5) // from 3 to 5
var source2 = Rx.Observable.range(5, 5)
var source3 = Rx.Observable.range(10, 4)

/* concat
the source2 will not be active until after the source1 has finished pushing all its values */
// source1.concat(source2).subscribe(log)

/* merge
values are pushed out as they occur in the sources. No callback for values */
// source1.merge(source2).subscribe(log)


/* combineLatest
combine latest of source1 and source2 whenever either gives a value
starts when all sources have given 1 value
*/
var source4 = Rx.Observable.interval(500).delay(500)
.map( i => 'First: ' + i)

var source5 = Rx.Observable.timer(2000, 1030)
.map( i => 'Second: ' + i)
console.log('script started')

source4.combineLatest(source5,
  (s1, s2) => console.log(s1, s2)
)
.subscribe()

/* catch
source2 will not be active since source1 completes without errors*/
// source1.catch(source2).subscribe(log)

/* onErrorResumeNext
guarantees that the source 2 will execute if the source 1 completes*/
// var source4 = Rx.Observable.throw(new Error('An error has occurred.'))
// source4.onErrorResumeNext(source2) //this exist in rx, not ex-lite
// .subscribe(log)

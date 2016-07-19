import Rx from 'rx'
Rx.config.longStackSupport = true

const __ = Rx.Observable
function log (x) { console.log(x) }


/* map
transforms the value to every value you want */
// var array = ['Reactive', 'Extensions', 'RxJS']
// var seqString = Rx.Observable.from(array)
// var seqNum = seqString.map( x => x.length )
// seqNum.subscribe(log)


/* flatmap
is like flattening array of arrays. When needing a observable inside an observable*/
// // example 1
// var uno$ = Rx.Observable.interval(2000).take(3)
// var proj = Rx.Observable.range(100, 3)
// var resultSeq = uno$
// .flatMap(proj)
// resultSeq.subscribe(log)
//
// // example 2
// let arr = ['uno', 'dos', 'tres', 'cuatro', 'cinco']
//
// let just$ = Rx.Observable.just(arr)
// .flatMap( x => x)
//
// just$
// .subscribe(log)
//
// resultSeq.subscribe(log)

// flatMapLatest
// on each event it uses only the first value of the second observable, until
// the last value of the first observable it uses the last value of the second observable
// var source = Rx.Observable
//   .range(1, 5)
//   .flatMapLatest( (x) => Rx.Observable.from([x + 'a', x + 'b']) )

// source.subscribe(log)


/* scan
transform an observable values using all of the items that it have sent
*/
let uno$ = __.interval(300).take(5)
uno$
.scan( (acc, x, i, source) => acc + x )
.subscribe(log)

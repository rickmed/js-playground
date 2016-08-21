import Rx from 'rx'
Rx.config.longStackSupport = true


const arr = ['Reactive', 'Extensions', 'RxJS']
const log = stream => val =>
    console.log(`I'm stream ${stream}, value: ${val}`)

const __ = Rx.Observable

console.log('script started')
const just$ = __.just(arr)
const from$ = __.from(arr)
const of$ = __.of(arr)
const tick$ = __.interval(200).take(4)
const timer$ = __.timer(3000, 1000) // idem but 1rst value after 3 seconds

// just$.subscribe(log('just$'))
// from$.subscribe(log('from$'))
// of$.subscribe(log('of$'))
// tick$.subscribe(log('tick$'))
timer$.subscribe(log('timer$'))

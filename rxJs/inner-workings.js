import Rx from 'rx-lite'

let Obs = Rx.Observable

let arr = ['uno', 'dos', 'tres', 'cuatro', 'cinco']

// this is a basic example on how operators are constructed
// all this is non-blocking since are merely based on registered callbacks
let source1 = Obs.create( observer => {
    arr.forEach( v => observer.onNext(v) )

    observer.onError(new Error('error!!!'))
    observer.onCompleted() // no values passed here. Just a notification.

    // called when the stream is disposed (automatically when it is a finite stream). Called on .disposed() when an infinite stream
    return function () {
        console.log('disposed')
    }
})


// arguments (callbacks): onNext, onError, onCompleted
let observer1 = Rx.Observer.create(
    (v) => console.log(v),
    (e) => console.log(e), // if this is not passed, the program would terminate
    () => console.log('notification received that it completed') // as the error occurs first in the above function, this will not be called.
)

// called subscription or disposable
let disposable = source1.subscribe(observer1)

disposable.dispose()

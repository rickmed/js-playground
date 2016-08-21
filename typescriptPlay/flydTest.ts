interface IStream<T> {
    () : T
    (value: T) : this
    map<T2>( f: (value:T) => T2 ) : IStream<T2>
    end : IStream<boolean>
}

import stream : IStream = require('flyd')

const numbers = stream<number>()

// typescript knows `n` is a number
// typescript knows strings is Stream<string>
const strings = numbers.map( n => n.toFixed(2) )

numbers('this is not a number') // <-- type error :)

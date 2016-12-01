const { timestamp, periodic } = require('most')

const s = timestamp(periodic(1)).take(20)
s.observe(({time}) => console.log(time))

// native settimeout executes min in 4ms,
// most does magic with scheduler to execute exactly every 1 ms
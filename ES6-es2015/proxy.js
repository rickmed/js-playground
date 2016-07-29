const w = new WeakMap()

var p = new Proxy(w, {})

console.log(p)

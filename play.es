const hi = new WeakMap()

function val(a) {
  return a
}

function key() {}

hi.set(key, val)

console.log(hi.get(key) === val )

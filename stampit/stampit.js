const stampit = require('stampit')

// Some more privileged methods, with some private data.
const availability = stampit().init(function() {
  var isOpen = false // private

  this.open = function open() {
    isOpen = true
    return this
  }
  this.close = function close() {
    isOpen = false
    return this
  }
  this.isOpen = function isOpenMethod() {
    return isOpen
  }

  this.addMe = function addMe(string) {
    this[string] = string
    return this
  }
})

// Here's a stamp with public methods, and some state:
const membership = stampit({
  methods: {  // these are added to __proto__
    add(member) {
      this.members[member.name] = member
      return this
    },
    getMember(name) {
      console.log(this.members[name])
    }
  },
  refs: {
    members: {}
  }
})

// Let's set some defaults:
const defaults = stampit().refs({
  name: 'The Saloon',
  specials: 'Whisky, Gin, Tequila'
})

// Classical inheritance has nothing on this. No parent/child coupling. No deep inheritance hierarchies.
// Just good, clean code reusability.
const bar = stampit.compose(defaults, availability, membership)

// Note that you can override references on instantiation:
const myBar = bar({name: 'Moe\'s'})


const what = myBar.addMe

what('ricky')  // does not work bc "this" changes
console.log(myBar)
// Silly, but proves that everything is as it should be.
// myBar.add({name: 'Homer'}).open().getMember('Homer')

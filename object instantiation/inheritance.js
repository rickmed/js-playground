
/*
COMPOSITIONAL DELEGATED PROTOYPAL
Animal is a delegate protoype
mouse could be composed from +1 protoype with object.assign
 */
const Animal = {
  animalType: 'animal',  // can use default props
  parent: 'Animal',

  describe () {
    return `An ${this.animalType}, with ${this.furColor} fur,
      ${this.legs} legs, and a ${this.tail} tail.`
  },
}


const mouse = Object.assign(Object.create(Animal), {
  animalType: 'mouse',
  furColor: 'brown',
  legs: 4,
  tail: 'long, skinny',
  ownMethod() {
    console.log('I am a mouse')
  },
  // describe() {
  //   const type = this.animalType
  //   return 'Overwrite my parents method. My type is ' + type
  // },
})

console.log('Mouse own method/props:\n', mouse)
console.log('Delegated methods/props:\n', mouse.__proto__)
console.log(Object.keys(mouse))

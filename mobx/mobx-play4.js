import { observable, autorun, computed, extras } from 'mobx'


let model = observable([1, 2, 3])

autorun(function hello () {
  console.log(model.slice())
})

console.log(extras.getDependencyTree(model))
// extras.trackTransitions(model)

model[0] = 8

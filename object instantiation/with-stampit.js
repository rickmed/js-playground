const { compose, methods, init, statics } = require('stampit').default
const { joi, validateSchema } = require('@springworks/input-validator')


// Private data: inside a module's scope
// import/export anywhere it as needed.
const appState = new WeakMap()

// Example: Age of Empires game.
// Composition is organize things by what they DO
// EG: walls do not attack, but cavaliers do.
// So, organize stamps base definitions (inits, statics, props, etc)
// by DOING namespacing.
// The below structure would be in directories instead of commenting


/*
DIR 1: General Game objects capabilities setups
// All objects MAY need to have:
// a) Arguments validation at instantiation
// b) State Defaults
// c) State tracking (this implemetation is private using weakmaps)
 */


// 2.a and b) Args Validation and Defaults
// a) and b) could be separated but simplicity in example.
// TODO: separate them (remove default from joi schema and add a static
// stamp receving defaults and object.assign to conf)

const ArgsValidation = statics({  // returns a stamp
  validateArgs(argsSchema) {
    // "this" on statics refers to the stamp (ArgsValidation)
    // deepConf returns a new stamp adding (merging) into the stamp conf
    // this is for chaining validateArgs (see instantiation below)
    return this.deepConf({ argsSchema })
  }
})
  .init( function (spec = {}, { stamp }) {
    // access the data added in the static at init
    const { argsSchema } = stamp.compose.deepConfiguration
    let validated
    try {
      validated = validateSchema(spec, argsSchema)
    } catch (err) {
      throw new Error(err.cause.details[0].message)
    }
    console.log('Arguments Valid!: \n', validated)
    // https://medium.com/@koresar/fun-with-stamps-episode-8-tracking-and-overriding-composition-573aa85ba622#.z1uamc7g5
    stamp.compose.conf.spec = validated  // to be added to state private data
  })


// 1.c) State
const setState = init( function (spec = {}, { stamp }) {  // returns a stamp
  const instanceState = Object.assign(Object.create(null), spec)
  appState.set(this, instanceState)  // "this" on init refers to the new instance
})
  .methods({
    getState () {
      return appState.get(this)
    },
  })

// Compose General Game objects capabilities
// First, declare schema with defaults
const gameSchema = joi.object().keys({
  position: joi.object().keys({
    x: joi.number().integer().default(0),
    y: joi.number().integer().default(0)
  }),
  onScreen: joi.boolean().default(false),
  timeCreated: joi.date().default(Date.now, 'time of creation'),
})

const GameBase = compose(ArgsValidation)


// the reason to separate ArgumentChecker from validateArgs static is that
// children of Character can check arguments without adding again ArgumentChecker





// // Game Character (methods/props that SHOULD have every character in the game)
// Methods

function greet () {
  console.log(`Hello. My name is: ${this.getState().name}`)
  return this
  // return `An ${meState.animalType}, with ${meState.furColor} fur,
  //   ${meState.legs} legs, and a ${meState.tail} tail.`
}

// Default Props (also for object instan args validation)
const character = {
  inmortal: false,
  lifePoints: 100,
}

// // Fighting Related Stuff
// Methods
function attack (state) {
  const { hard } = state.attackPoints
  state.lifePoints += hard
  console.log(`Hard Attack! Added LifePoints. Total: ${state.lifePoints}`)
  return this
}

function defend (state, points) {
  const orig = state.lifePoints
  state.lifePoints -= points
  console.log(`Someone attacked me.
    Reducing ${points} lifePoints.
    Original lifePoints: ${orig}
    Remaining: ${state.lifePoints}`)
  return this
}


// Default Props - no defaults, only validation
const fighting = {
  attackPoints: {
    hard: 'number',
    weak: 'number',
  },
  defendPoints: 'number',
}


/*
Interacting with
 */



// // Static Character (walls, buildings, etc)


// // Character
// "this" should reference the instance:
// mainly to return this to chain instance methods
// and to use internally other instance methods as helpers.


// TODO: add props conflict mechanism/capabilities https://github.com/stampit-org/stamp-specification (configuration example)





const ins1 = FightDog({
  attackPoints: {
    weak: 40,
    hard: 10,
  },
  defendPoints: 10,
  name: 'lasko',
  species: 'labrador',
  tail: ['long, skinny'],
})

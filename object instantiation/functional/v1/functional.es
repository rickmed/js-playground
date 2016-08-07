'use strict'

import {Pooper, poop} from './pooper.js'
import {Eater, eat} from './eater.js'

const manu = {}

// TODO: think how to init the first time manu.
// maybe a global init function.
manu::Pooper(0)::Eater(10)
  ::poop()
  ::poop()
  ::eat()
  ::eat()

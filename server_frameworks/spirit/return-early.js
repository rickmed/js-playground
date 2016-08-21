const {adapter, response } = require('spirit').node
const { createServer } = require('http')


const hand = () => response(`Hi, visitor`)

const mw1 = (handler) => (req) => {
  return response('returning from first mw')
  return handler(req).then( req => req)
}

const mw2 = (handler) => (req) => {
  console.log('later mw message')
  return handler(req).then( req => {
    return response('intercepted return from mw2')
    return req
  })
}


const spiritApp = adapter(hand, [mw1, mw2])

createServer(spiritApp)
  .listen({port: 3030}, () => console.log('server started'))

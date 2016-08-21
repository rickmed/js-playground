const { adapter, response } = require('spirit').node
const { createServer } = require('http')

function handlerUsingDb(param) {
  return new Promise(function (resolve) {
    param === 'jose' ?
     setTimeout( () => resolve(param), 500)
     : setTimeout( () => resolve(param), 1000)
  });
}

function handlerRM() {
  return handlerUsingDb('jose')
    .then( myName => {
      console.log('from handler')

      return response(myName)} )
    .then( resp => {
      // console.log(resp)
      return resp
    })
}

function mw_1(handler) {
  return function reqMW1(req) {
    // req.req().destroy()
    // console.log(req.req().rawHeaders)
    // console.log('im mw_1 url reqest:', req.url)
    return handlerUsingDb('andres')
    .then( db_output => {
      console.log('from mw1', db_output)
      return handler(req)
    })
    .then( resp => {
      return resp
    })
    .catch( (err) => {
      console.log('error catched!', err)
      return response('dear visitor. something went wrong with: ' + err.type)
    })
  }
}


function newMWdesign(handler) {
  return function reqMW2(req, res) {
    // I need to return a promise here if I want to do somethign async
    return other(req.url).then( data => {
      // how to halt middleware chain here?
      if (data === 'response to client now') res.send('hi client')
      // would need to inspect the results form the then in the engine
      // if it is a reponse object, return it
    })


    return handler(req).then( resp => {
      console.log('mw_2 response')
      throw {
        type: 'db_error'
      }
      // throw new Error('db returned something bad')
      return resp
    })
  }
}

const spiritApp = adapter(handlerRM, [mw_1, newMWdesign])

createServer(spiritApp)
  .listen({port: 3030}, () => console.log('server started'))


const {adapter, response, redirect, errResponse } = require('spirit').node
const {compose} = require('spirit')
const {log} = require('spirit').node.middleware

const { get, post, define } = require('spirit-router')
const {createServer} = require('http')


const handler1 = (user) => {
  console.log('user handler ran')
  return `Hi, ${user}`
}


const users = define("/users", [
  get("/:user", ['user'], handler1),
  post("/", "You posted to /users")
])


const app = define([
  get("/", "Hello World"),
  users
])

const middleware1 = (handler) => {
  return (req1) => {
    return response('returned from mw1')
  // console.log('mw 1 url:', req1.url)
    return handler(req1).then( resp => {
      // console.log('m1 called last:', resp.body)
      // console.log('m1 accesing stuff from m2', resp.hello)
      return resp
    })
}}
const middleware2 = (handler) => (req2) => {
  console.log('mw2 ran')
  return handler(req2).then( resp => {
    // console.log('m2 called first on un return')
    // console.log('m2 modifying reponse: ')
    resp.hello = 'hii!'
    return resp
  })
}

const handlerEG = (req) => {
  // console.log('I ran for: ', req.url)
  // return redirect("http://www.yahoo.com")
  // return response('Hiii visitor!')
  // return errResponse(new Error("oops"))
  return { status: 200,
    body: JSON.stringify(req),
    headers: {
      "Set-Cookie": ["type=ninja", "language=javascript"]
    }
  }
}

const composedHandler = compose(handlerEG, [middleware1, middleware2])

const highCompose = compose(composedHandler, [middleware1, middleware2, log])

const spiritApp = adapter(highCompose)
// const spiritApp = adapter(app, [middleware1, middleware2])

createServer(spiritApp)
  .listen({port: 3030}, () => console.log('server started'))

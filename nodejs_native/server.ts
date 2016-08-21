// import http = require('http')
// import url = require('url')

import * as http from 'http'
import * as url from 'url'

function handler (req: http.IncomingMessage, resp) {

  const parsedUrl = url.parse(<string>req.url, true) // true parses the query string

  console.log(parsedUrl)
  resp.write('hello ')
  resp.write('from ')
  resp.end('nodejs')

}


http.createServer(handler)
  .listen({port: 3000}, () => console.log('server started'))

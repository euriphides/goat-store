const http = require('http')

const httpRequestHandler = (request, response) => {
  console.log(request.url)
  response.end('hi')
}

const server = http.createServer(httpRequestHandler)

const port = 8080

server.listen(port)
console.log(`server started at http://localhost:${port}`)

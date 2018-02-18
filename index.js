const http = require('http')
let hits = 0

const httpRequestHandler = (request, response) => {
  console.log(request.url)
  hits += 1
  response.end(`hi, you've had ${hits}`)
}

const server = http.createServer(httpRequestHandler)

const port = 8080

server.listen(port)
console.log(`server started at http://localhost:${port}`)

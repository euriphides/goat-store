require('dotenv').config()
const express = require('express')
const port = 8080
const app = express()
require('./db')

app.use((req, res, next) => {
  console.log({url: req.url})
  next()
})

require('./routes/products')(app)

app.get('/', (req, res) => {
  res.json({options: [
    'GET /api/v1/products',
    'GET /api/v1/products/:id',
    'GET /api/v1/cart',
    'PATCH /api/v1/cart',
    'DELETE /api/v1/cart',
    'GET /api/v1/checkout'
  ]})
})

app.listen(port)
console.log(`server started at http://localhost:${port}`)

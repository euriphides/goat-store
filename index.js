require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = 8080
const app = express()
require('./db')

app.use(cors())

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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error Handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    error: {
      message: err.message
    }
  })
  next(err)
})

app.listen(port, function () {
  console.log(`server started at http://localhost:${port}`)
})

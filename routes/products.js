const Product = require('../models/product')

module.exports = (app) => {
  app.get('/api/v1/products', async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
  app.get('/api/v1/products/:id', async (req, res) => {
    const product = await Product.findOne({
      _id: req.params.id
    })
    res.json(product)
  })
}

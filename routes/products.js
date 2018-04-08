const Product = require('../models/product')

module.exports = (app) => {
  app.get('/api/v1/products', async (req, res) => {
    try {
      const products = await Product.find({})
        .select({
          name: 1,
          _id: 1,
          price: 1
        })
      res.json(products)
    } catch (e) {
      res.status(500)
      res.json({error: 'No Products Found'})
    }
  })
  app.get('/api/v1/products/:id', async (req, res) => {
    try {
      const product = await Product.findOne({
        _id: req.params.id
      })
      res.json(product)
    } catch (e) {
      res.status(404)
      res.json({error: 'Not Found'})
    }
  })
}

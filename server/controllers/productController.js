const { redisGet, redisSet, memoryDB } = require('..config/db');
const Product = require('../models/Product');


const getProducts = async (req, res) => {
  try {
    const { source = 'mongo' } = req.query;
    
    if (source === 'memory') {
      return res.json(memoryDB.get('products'));
    }
    
    if (source === 'redis') {
      const cachedProducts = await redisGet('products');
      if (cachedProducts) {
        return res.json(JSON.parse(cachedProducts));
      }
    }

   
    const products = await Product.find();
    
    if (source === 'redis') {
      await redisSet('products', JSON.stringify(products), 'EX', 3600);
    }
    
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = { getProducts, getProductById, createProduct, updateProduct };
const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct
} = require('../controllers/productController');

// GET /api/products - Получить все товары
router.get('/', getProducts);

// GET /api/products/:id - Получить товар по ID
router.get('/:id', getProductById);

// POST /api/products - Создать товар
router.post('/', createProduct);

// PUT /api/products/:id - Обновить товар
router.put('/:id', updateProduct);

module.exports = router;
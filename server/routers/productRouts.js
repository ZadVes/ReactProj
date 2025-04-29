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

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Ошибка при получении продуктов:', error); // 🔥 Добавь это
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
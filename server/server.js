const path = require('path'); 
const express = require('express');
const { connectDB } = require('./config/db');
const productRoutes = require('./routers/productRouts');
const orderRoutes = require('./routers/orderRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.json({
    message: 'API is working',
    endpoints: {
      products: '/api/products',
      orders: '/api/orders'
    }
  });
});


app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
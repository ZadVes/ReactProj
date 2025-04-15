const express = require('express');
const { connectDB } = require('./config/db');
const productRoutes = require('./routers/productRouts');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

// Маршруты
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
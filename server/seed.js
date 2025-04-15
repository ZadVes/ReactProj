const { connectDB } = require('./config/db');
const Product = require('./model/Product');
const Order = require('./model/Order');

const seedData = async () => {
  await connectDB();
  
  // Очистка коллекций
  await Product.deleteMany();
  await Order.deleteMany();

  // Добавление тестовых товаров
  const products = await Product.insertMany([
    { name: "Model S", price: 79990 },
    { name: "Model 3", price: 39990 },
    { name: "Model X", price: 89990 }
  ]);

  // Добавление тестового заказа
  await Order.create({
    products: [
      { productId: products[0]._id, quantity: 2 },
      { productId: products[1]._id, quantity: 1 }
    ],
    totalPrice: 79990*2 + 39990
  });

  console.log("Test data seeded successfully");
  process.exit();
};

seedData().catch(console.error);
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
    {
      name: "Model S",
      price: 79990,
      description: "Элегантный, быстрый и полностью электрический седан.",
      imageUrl: "https://tesla-cdn.thron.com/delivery/public/image/tesla/53e93bd5-4f44-4d5a-b5f5-719eeb62c5c4/bvlatuR/std/2880x1800/Desktop-ModelS",
      specs: "0-100 км/ч за 3.2 сек, Запас хода 652 км"
    },
    {
      name: "Model 3",
      price: 39990,
      description: "Доступный электромобиль от Tesla с впечатляющей дальностью хода.",
      imageUrl: "https://tesla-cdn.thron.com/delivery/public/image/tesla/5d621c6d-5f83-4627-b073-7466eae1c276/bvlatuR/std/4096x2560/Desktop-Model3",
      specs: "0-100 км/ч за 3.2 сек, Запас хода 652 км"
    },
    {
      name: "Model X",
      price: 89990,
      description: "Просторный кроссовер с уникальными дверями-крыльями и высоким комфортом.",
      imageUrl: "https://tesla-cdn.thron.com/delivery/public/image/tesla/87a95b5e-eccb-4db9-8a64-5f52c01bc1df/bvlatuR/std/4096x2560/Desktop-ModelX",
      specs: "0-100 км/ч за 3.2 сек, Запас хода 652 км"
    }
  ]);

  // Добавление тестового заказа
  await Order.create({
    products: [
      { productId: products[0]._id, quantity: 2 },
      { productId: products[1]._id, quantity: 1 }
    ],
    totalPrice: products[0].price * 2 + products[1].price
  });

  console.log("✅ Test data seeded successfully");
  process.exit();
};

seedData().catch(console.error);

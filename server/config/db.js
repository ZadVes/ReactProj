const mongoose = require('mongoose');
const redis = require('redis');
const { promisify } = require('util');

// In-memory хранилище
const memoryDB = new Map();
memoryDB.set('products', [
  { id: 1, name: 'Model Y', price: '$299/mo' },
  { id: 2, name: 'Cybertruck', price: '$749/mo' }
]);

// MongoDB подключение
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Redis подключение
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379
});
const redisGet = promisify(redisClient.get).bind(redisClient);
const redisSet = promisify(redisClient.set).bind(redisClient);

module.exports = { connectDB, redisClient, redisGet, redisSet, memoryDB };
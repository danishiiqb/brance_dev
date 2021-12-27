import express from 'express';
import productRouter from './router/products.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb' }));
// app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use('/api/v1/products', productRouter);

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log('server');
    });
  } catch (err) {
    console.log(err.message);
  }
}
startServer();

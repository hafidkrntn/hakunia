import express from 'express'; 
import './connection.js';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import Stripe from 'stripe'
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import imagesRoutes from './routes/imagesRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import path from 'path';


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
});

const stripe = new Stripe(process.env.STRIPE_SECRET);


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/images', imagesRoutes);
app.use('/orders', orderRoutes)


app.post('/create-payment', async(req, res) => {
  const {amount} = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'IDR',
      payment_method_types: ['card']
    });
    res.status(200).json(paymentIntent);
  } catch (e) {
    res.status(400).json(e.message);
  }
});


server.listen(8080, () =>{
  console.log('Server is running at port', 8080)
});

app.set('socketio', io);
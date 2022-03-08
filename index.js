import express from 'express';
import stripe from 'stripe';
import dotenv from 'dotenv';
import chalk from 'chalk';
import * as admin from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
dotenv.config();
// firebase connect from backend
import { serviceAccount } from './permissions.js';
const app = express();

const initApp = !admin.getApps().length
  ? admin.initializeApp({
      credential: admin.cert(serviceAccount),
    })
  : admin.getApp();

const db = getFirestore();

const stripePay = stripe(process.env.STRIPE_KEY);
let images = [];
app.post('/api/create-checkout-session', express.json(), async (req, res) => {
  const { items, docId } = req.body;
  try {
    const transformItems = items.map((item) => ({
      description: item.description.slice(0, 33),
      quantity: item.qty,
      price_data: {
        currency: 'usd',
        unit_amount: (Math.round(+item.prize * 100) / 100).toFixed(2) * 100,
        product_data: {
          name: item.title,
          images: [item.productImg[0]],
        },
      },
    }));
    images = items.map((el) => el.productImg[0]);
    const session = await stripePay.checkout.sessions.create({
      payment_method_types: ['card'],
      shipping_rates: ['shr_1KaiH8SD9jCLwCZ02Y4YC968'],
      line_items: transformItems,
      shipping_address_collection: {
        allowed_countries: ['GB', 'US', 'CA'],
      },
      mode: 'payment',
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/checkout`,
      metadata: {
        docId,
      },
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    console.log(err);
  }
});

async function postOrderToDb(session) {
  return db
    .collection('users')
    .doc(session.metadata.docId)
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images,
      timestamp: new Date(),
    })
    .then(() => {
      console.log('order done');
    });
}

app.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const sign = req.headers['stripe-signature'];
    let event;
    // event posted comes from stripe
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sign,
        process.env.WEBHOOK_CONN
      );
    } catch (err) {
      return res.status(400).send(`Webhook err : ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      return postOrderToDb(session)
        .then((res) => {
          res.status(200);
        })
        .catch((err) => {
          res.status(400).send(`Webhook err : ${err.message}`);
        });
    }
  }
);

app.listen(5000, () => {
  console.log('server');
});

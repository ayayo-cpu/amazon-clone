// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

import { onRequest } from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import Stripe from "stripe";
const stripeSecretKey = process.env.STRIPE_KEY;
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16", // or your preferred API version
});
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Seccees !",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  if (total > 0) {
    // console.log("Payment Recieved", total)
    // res.send(total)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "USD",
    });

    console.log(paymentIntent);
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "total must be greater than 0",
    });
  }
});

// exports.api = onRequest(app);
export const api = onRequest(app); //ES6

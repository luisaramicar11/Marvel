const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const stripe = new Stripe(
  "sk_test_51Mg5xgBrpCweGOwOoZqZfoS9rJSGAK2g6peB2oGlWfd4AdQ88PyZHoQ8RUjxfGbUeD234Zy5HPlP38kvwebmWcC700KvcZw834"
);

const app = express();
app.use(cors({ origin: "http://127.0.0.1:3000" }));
app.use(express.json());

//middleware

app.post("/api/checkout", async (req, res) => {
  console.log(req.body);
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "E-commerce",
      confirm: true,
      payment_method: id,
      return_url: "http://127.0.0.1:3000/checkoutForm",
    });
    console.log(payment);
    return res.status(200).json({ message: "Payment successful" });
  } catch (error) {
    return res.json({
      message: error.raw.message,
    });
  }
});

app.listen(3001, () => console.log("Server running on port", 3001));

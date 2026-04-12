require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const admin = require("firebase-admin");
const { OpenAI } = require("openai");
const db = require("./db");

const app = express();
process.on("uncaughtException", (err) => {
  console.error("🔥 Uncaught Exception:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("🔥 Unhandled Rejection:", err);
});
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log("❌ Webhook error:", err.message);
      return res.status(400).send(err.message);
    }
    console.log("🔥 WEBHOOK:", event.type);
    try {
      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const userId = session.metadata?.userId;
        if (!userId) {
          return res.status(400).send("Missing userId");
        }
        await db.query(
          "UPDATE users SET subscribed = true WHERE firebase_uid = $1",
          [userId]
        );
        console.log("✅ Payment success:", userId);
      }

      res.json({ received: true });
    } catch (err) {
      console.error("WEBHOOK ERROR:", err);
      res.status(500).send(err.message);
    }
  }
);

app.use(express.json());

/* ==========================
   LOGGING
========================== */
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

/* ==========================
   CORS (DEV SAFE)
========================== */
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

/* ==========================
   HEALTH CHECK (FIRST TEST ROUTE)
========================== */
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

/* ==========================
   FIREBASE INIT (SAFE CHECK)
========================== */
try {
  admin.initializeApp({
    credential: admin.credential.cert(require("./firebase-key.json")),
  });
  console.log("✅ Firebase initialized");
} catch (err) {
  console.error("❌ Firebase init failed:", err.message);
}

/* ==========================
   OPENAI INIT
========================== */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/* ==========================
   VERIFY USER MIDDLEWARE
========================== */
async function verifyUser(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    console.log("🔍 Verifying user with header:", authHeader);
    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).send("No token");
    }
    const token = authHeader.split("Bearer ")[1];
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("VERIFY ERROR:", err.message);
    // return res.status(401).send("Invalid token");
  }
}

/* ==========================
   SYNC USER
========================== */
app.post("/auth/sync-user", verifyUser, async (req, res) => {
  try {
    const { uid, email, name } = req.user;

    await db.query(
      `
      INSERT INTO users (firebase_uid, email, name)
      VALUES ($1, $2, $3)
      ON CONFLICT (firebase_uid)
      DO UPDATE SET email = EXCLUDED.email, name = EXCLUDED.name
      `,
      [uid, email || "", name || ""]
    );

    res.json({ success: true });
  } catch (err) {
    console.error("SYNC ERROR:", err);
    res.status(500).send(err.message);
  }
});

/* ==========================
   STRIPE CHECKOUT
========================== */
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { plan } = req.body;
    const priceId =
      plan === "yearly"
        ? "price_1TLTuQK3YOgc54pJprgITfCB"
        : "price_1TLTv0K3YOgc54pJDMz3Erc3";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("❌ Stripe error:", err);
    res.status(500).json({ error: err.message }); // ✅ always JSON
  }
});

/* ==========================
   VERIFY ACCESS
========================== */
app.get("/verify", verifyUser, async (req, res) => {
  try {
    console.log("Verifying access for user:", req.user.uid);
    const result = await db.query(
      "SELECT subscribed FROM users WHERE firebase_uid = $1",
      [req.user.uid]
    );
    res.json({
      access: result.rows[0]?.subscribed === true,
      email: req.user.email,
    });
  } catch (err) {
    console.error("VERIFY DB ERROR:", err);
    res.json({ access: false });
  }
});

/* ==========================
   SUMMARIZE (OPENAI)
========================== */
app.post("/summarize", verifyUser, async (req, res) => {
  try {
    const result = await db.query(
      "SELECT subscribed FROM users WHERE firebase_uid = $1",
      [req.user.uid]
    );

    if (!result.rows[0]?.subscribed) {
      return res.status(403).send("Please purchase access");
    }

    const { text } = req.body;


    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Summarize this:\n\n${text?.substring(0, 8000) || ""}`,
        },
      ],
    });

    console.log("OPENAI RESPONSE:", response.choices[0].message.content);

    res.json({
      summary: response.choices[0].message.content,
    });
  } catch (err) {
    console.error("OPENAI ERROR:", err);
    res.status(500).send(err.message);
  }
});

/* ==========================
   STRIPE WEBHOOK (MUST BE RAW)
========================== */

/* ==========================
   START SERVER
========================== */
app.listen(5050, () => {
  console.log("🚀 Server running on http://localhost:5050");
});
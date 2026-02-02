const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// نقطة استقبال رسائل واتساب
app.post("/webhook", (req, res) => {
    console.log("Received message:", req.body);
    res.sendStatus(200);
});

// نخلي السيرفر يشتغل على المنفذ اللي Render يديه
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`WhatsApp bot is running on port ${PORT}`);
});

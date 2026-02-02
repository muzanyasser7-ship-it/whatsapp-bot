const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

const client = new Client();

// أول ما يطلب تسجيل دخول، يطبع QR Code في الـ Logs
client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
    console.log("Scan this QR code with WhatsApp to connect.");
});

// لما يتسجل الدخول
client.on("ready", () => {
    console.log("WhatsApp bot is ready!");
});

// لما تجي رسالة جديدة
client.on("message", (message) => {
    console.log("Received message:", message.body);

    // مثال: رد تلقائي
    if (message.body.toLowerCase() === "مرحبا") {
        message.reply("أهلاً يا مزنة 🌸، البوت شغال!");
    }
});

client.initialize();

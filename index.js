const { makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("auth_info");
    const sock = makeWASocket({ auth: state });

    // حفظ بيانات الدخول
    sock.ev.on("creds.update", saveCreds);

    // لما تجي رسالة جديدة
    sock.ev.on("messages.upsert", async (msg) => {
        const message = msg.messages[0];
        if (!message.message) return;

        const text = message.message.conversation || "";
        console.log("Received message:", text);

        // مثال: رد تلقائي
        if (text.toLowerCase() === "مرحبا") {
            await sock.sendMessage(message.key.remoteJid, { text: "أهلاً يا مزنة 🌸، البوت شغال!" });
        }
    });
}

startBot();

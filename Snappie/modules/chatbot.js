const { MongoClient } = require('mongodb');
const { Client, filters, ChatAction } = require('pyrogram');
const { MONGO_URL } = require('../../config');
const SnappieBot = require('./Snappie').SnappieBot;

// Function to get MongoDB URI with a default value
function getMongoURI(MONGO_URL) {
    return config.MONGO_URL || 'mongodb+srv://AnushkaChatBotDB:ezzswNHdFNJelATW@anushkachatbotdb.5swe6hs.mongodb.net/?retryWrites=true&w=majority&appName=AnushkaChatBotDB'; // Replace with your default MongoDB URI
}

// MongoDB setup
const chatdb = new MongoClient(getMongoURI(MONGO_URL), { useNewUrlParser: true, useUnifiedTopology: true });
let chatai, vick;

async function connectMongo() {
    await chatdb.connect();
    const db = chatdb.db();
    chatai = db.collection('Word').collection('WordDb');
    vick = db.collection('VickDb').collection('Vick');
}

// Helper function to check command-like text
function isCommandText(text) {
    return text.startsWith("!") || text.startsWith("/") || text.startsWith("?") || text.startsWith("@") || text.startsWith("#");
}

SnappieBot.on('message', async (message) => {
    try {
        if (isCommandText(message.text)) {
            return;
        }
    } catch (error) {
        // Handle error
    }

    const isVick = await vick.findOne({ chat_id: message.chat.id });
    if (!isVick) {
        await message.chat.sendChatAction(ChatAction.TYPING);
        await new Promise(resolve => setTimeout(resolve, 20000)); // Introduce a delay to prevent flood wait

        if (!message.reply_to_message) {
            const K = await chatai.find({ word: message.text }).toArray();
            if (K.length > 0) {
                const hey = K[Math.floor(Math.random() * K.length)].text;
                const isText = await chatai.findOne({ text: hey });
                if (isText.check === "sticker") {
                    await message.replyWithSticker(hey);
                } else {
                    await message.reply(hey);
                }
            }
        } else {
            if (message.reply_to_message.from.id === message.from.id) {
                const K = await chatai.find({ word: message.text }).toArray();
                if (K.length > 0) {
                    const hey = K[Math.floor(Math.random() * K.length)].text;
                    const isText = await chatai.findOne({ text: hey });
                    if (isText.check === "sticker") {
                        await message.replyWithSticker(hey);
                    } else {
                        await message.reply(hey);
                    }
                }
            } else {
                if (message.sticker) {
                    const isChat = await chatai.findOne({ word: message.reply_to_message.text, id: message.sticker.file_unique_id });
                    if (!isChat) {
                        await chatai.insertOne({
                            word: message.reply_to_message.text,
                            text: message.sticker.file_id,
                            check: "sticker",
                            id: message.sticker.file_unique_id,
                        });
                    }
                }
                if (message.text) {
                    const isChat = await chatai.findOne({ word: message.reply_to_message.text, text: message.text });
                    if (!isChat) {
                        await chatai.insertOne({
                            word: message.reply_to_message.text,
                            text: message.text,
                            check: "none",
                        });
                    }
                }
            }
        }
    }
});

SnappieBot.on('message', async (message) => {
    try {
        if (isCommandText(message.text)) {
            return;
        }
    } catch (error) {
        // Handle error
    }

    const isVick = await vick.findOne({ chat_id: message.chat.id });
    if (!isVick) {
        await message.chat.sendChatAction(ChatAction.TYPING);
        await new Promise(resolve => setTimeout(resolve, 50000)); // Introduce a delay to prevent flood wait

        if (!message.reply_to_message) {
            const K = await chatai.find({ word: message.sticker.file_unique_id }).toArray();
            if (K.length > 0) {
                const hey = K[Math.floor(Math.random() * K.length)].text;
                const isText = await chatai.findOne({ text: hey });
                if (isText.check === "text") {
                    await message.reply(hey);
                } else {
                    await message.replyWithSticker(hey);
                }
            }
        } else {
            if (message.reply_to_message.from.id === message.from.id) {
                const K = await chatai.find({ word: message.text }).toArray();
                if (K.length > 0) {
                    const hey = K[Math.floor(Math.random() * K.length)].text;
                    const isText = await chatai.findOne({ text: hey });
                    if (isText.check === "text") {
                        await message.reply(hey);
                    } else {
                        await message.replyWithSticker(hey);
                    }
                }
            } else {
                if (message.text) {
                    const isChat = await chatai.findOne({ word: message.reply_to_message.sticker.file_unique_id, text: message.text });
                    if (!isChat) {
                        await chatai.insertOne({
                            word: message.reply_to_message.sticker.file_unique_id,
                            text: message.text,
                            check: "text",
                        });
                    }
                }
                if (message.sticker) {
                    const isChat = await chatai.findOne({ word: message.reply_to_message.sticker.file_unique_id, text: message.sticker.file_id });
                    if (!isChat) {
                        await chatai.insertOne({
                            word: message.reply_to_message.sticker.file_unique_id,
                            text: message.sticker.file_id,
                            check: "none",
                        });
                    }
                }
            }
        }
    }
});

SnappieBot.on('message', async (message) => {
    try {
        if (isCommandText(message.text)) {
            return;
        }
    } catch (error) {
        // Handle error
    }

    await message.chat.sendChatAction(ChatAction.TYPING);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Introduce a delay to prevent flood wait

    if (!message.reply_to_message) {
        const K = await chatai.find({ word: message.text }).toArray();
        if (K.length > 0) {
            const hey = K[Math.floor(Math.random() * K.length)].text;
            const isText = await chatai.findOne({ text: hey });
            if (isText.check === "sticker") {
                await message.replyWithSticker(hey);
            } else {
                await message.reply(hey);
            }
        }
    } else {
        if (message.reply_to_message.from.id === message.from.id) {
            const K = await chatai.find({ word: message.text }).toArray();
            if (K.length > 0) {
                const hey = K[Math.floor(Math.random() * K.length)].text;
                const isText = await chatai.findOne({ text: hey });
                if (isText.check === "sticker") {
                    await message.replyWithSticker(hey);
                } else {
                    await message.reply(hey);
                }
            }
        }
    }
});

SnappieBot.on('message', async (message) => {
    try {
        if (isCommandText(message.text)) {
            return;
        }
    } catch (error) {
        // Handle error
    }

    await message.chat.sendChatAction(ChatAction.TYPING);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Introduce a delay to prevent flood wait

    if (!message.reply_to_message) {
        const K = await chatai.find({ word: message.sticker.file_unique_id }).toArray();
        if (K.length > 0) {
            const hey = K[Math.floor(Math.random() * K.length)].text;
            const isText = await chatai.findOne({ text: hey });
            if (isText.check === "text") {
                await message.reply(hey);
            } else {
                await message.replyWithSticker(hey);
            }
        }
    } else {
        if (message.reply_to_message.from.id === message.from.id) {
            const K = await chatai.find({ word: message.sticker.file_unique_id }).toArray();
            if (K.length > 0) {
                const hey = K[Math.floor(Math.random() * K.length)].text;
                const isText = await chatai.findOne({ text: hey });
                if (isText.check === "text") {
                    await message.reply(hey);
                } else {
                    await message.replyWithSticker(hey);
                }
            }
        }
    }
});

(async () => {
    await connectMongo();
    SnappieBot.run();
})();

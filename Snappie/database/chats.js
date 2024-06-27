const { getMongoClient } = require('./__init__.js'); // Import getMongoClient function
const dbName = 'VickDb'; // Assuming the database name is VickDb
const collectionName = 'Vick'; // Assuming the collection name is Vick

async function get_served_chats() {
    const client = await getMongoClient();
    const db = client.db(dbName);
    const chatsdb = db.collection(collectionName);

    const chats = await chatsdb.find({ "chat_id": { "$lt": 0 } }).toArray();
    client.close();

    if (!chats || chats.length === 0) {
        return [];
    }

    return chats;
}

async function is_served_chat(chat_id) {
    const client = await getMongoClient();
    const db = client.db(dbName);
    const chatsdb = db.collection(collectionName);

    const chat = await chatsdb.findOne({ "chat_id": chat_id });
    client.close();

    return !!chat;
}

async function add_served_chat(chat_id) {
    const client = await getMongoClient();
    const db = client.db(dbName);
    const chatsdb = db.collection(collectionName);

    const isServed = await is_served_chat(chat_id);
    if (isServed) {
        client.close();
        return;
    }

    await chatsdb.insertOne({ "chat_id": chat_id });
    client.close();
}

async function remove_served_chat(chat_id) {
    const client = await getMongoClient();
    const db = client.db(dbName);
    const chatsdb = db.collection(collectionName);

    const isServed = await is_served_chat(chat_id);
    if (!isServed) {
        client.close();
        return;
    }

    await chatsdb.deleteOne({ "chat_id": chat_id });
    client.close();
}

module.exports = {
    get_served_chats,
    is_served_chat,
    add_served_chat,
    remove_served_chat
};

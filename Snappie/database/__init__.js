// Import required modules
const { MongoClient } = require('mongodb');
const config = require('../../config');

// Function to get MongoDB URI with a default value
function getMongoURI() {
    return config.MONGO_URL || 'mongodb+srv://AnushkaChatBotDB:ezzswNHdFNJelATW@anushkachatbotdb.5swe6hs.mongodb.net/?retryWrites=true&w=majority&appName=AnushkaChatBotDB'; // Replace with your default MongoDB URI
}

async function getMongoClient() {
    const uri = getMongoURI();
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    return client;
}

// Initialize MongoDB client
let client; // Declare client variable

async function connectToMongo() {
    try {
        // Connect to MongoDB
        client = await getMongoClient();
        console.log("Connected to MongoDB");

        // Select database and collection
        const vickdb = client.db('VickDb');
        const vick = vickdb.collection('Vick');

        // Perform operations with `vick` collection if needed

    } catch (err) {
        console.error(err);
    }
}

connectToMongo();

// Import statements for chats and users (assuming these are ES6 imports)
import { get_served_chats, is_served_chat, add_served_chat, remove_served_chat } from './chats.js';
import { isServedUser, getServedUsers, addServedUser } from './users.js';
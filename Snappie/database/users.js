const { getMongoClient } = require('./__init__.js');
const dbName = 'VickDb';
const collectionName = 'users';

async function isServedUser(userId) {
    const client = await getMongoClient();
    const usersdb = client.db(dbName).collection(collectionName);

    const user = await usersdb.findOne({ "user_id": userId });
    client.close();

    return !!user; // Convert to boolean
}

async function getServedUsers() {
    const client = await getMongoClient();
    const usersdb = client.db(dbName).collection(collectionName);

    const usersList = await usersdb.find({ "user_id": { "$gt": 0 } }).toArray();
    client.close();

    return usersList;
}

async function addServedUser(userId) {
    const client = await getMongoClient();
    const usersdb = client.db(dbName).collection(collectionName);

    const isServed = await isServedUser(userId);
    if (isServed) {
        client.close();
        return; // User already served, so return early
    }

    await usersdb.insertOne({ "user_id": userId });
    client.close();
}

module.exports = {
    isServedUser,
    getServedUsers,
    addServedUser
};
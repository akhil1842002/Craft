const { MongoClient } = require('mongodb');
require("dotenv").config()
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
const dbName = process.env.MONGO_DB;

console.log(dbName);

async function main() {
    try {
        await client.connect();
		console.log("db connect sucessfully")
        return client.db(dbName);  
    } catch (error) {
        console.log("errors")
    }
}

module.exports = {
    main
}
const { MongoClient } = require("mongodb");
const companies = require('./data/companies.json')
const items = require('./data/items.json')

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
useNewUrlParser: true,
useUnifiedTopology: true,
};


const batchImport = async () => {

    // creates a new client
    const client = new MongoClient(MONGO_URI, options);

    try {        
        // connect to the client
        await client.connect();
        // connect to the database (db name is provided as an argument to the function)
        const db = client.db("Group-Project-Watchout");

        // inserting into collection
        const result = await db.collection("items").insertMany(items);

        } catch (err) {

        } finally {
        // close the connection to the database server
        client.close();
    }
}

batchImport()
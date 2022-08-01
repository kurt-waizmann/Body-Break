const { creatClient } = require("./utils");

const client = creatClient();
const dbName = "Group-Project-Watchout";


const deleteCart = async (req, res) => {
    try {        
        // connect to the client
        await client.connect();

        // connect to the database 
        const db = client.db(dbName);
        console.log("connected!");

        // grabbing from the collection
        const result = (await db.collection("cart").deleteMany({}));

        // response
        result
        ? res.status(200).json({ status:200, message: "Success!", data: result})
        : res.status(404).json({ status:404, message: "Not found", data: result});

    // catch any errors and return info/message
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });

    // close the connection to the database server
    } finally {
        client.close();
        console.log("disconnected!");
    }

}

module.exports = { deleteCart };


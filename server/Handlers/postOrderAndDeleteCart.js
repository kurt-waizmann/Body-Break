const { creatClient } = require("./utils");

const client = creatClient();
const dbName = "Group-Project-Watchout";

const postOrderAndDeleteCart = async (req, res) => {

    // data format
    const data = {
        _id: req.body._id,
        creditCard: req.body.creditCard,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        email: req.body.email,
        items: req.body.items,
        cost: req.body.cost,
    }

    try {        
        // connect to the client
        await client.connect();

        // connect to the database 
        const db = client.db(dbName);
        console.log("connected!");

        // post the order after purchased
        const result = (await db.collection("orders").insertOne(data));

        // delete if acknowledged
        result.acknowledged && (await db.collection("cart").deleteMany({}))

        // response
        result
        ? res.status(200).json({ status:200, message: "Success!", data: result})
        : res.status(400).json({ status:404, message: "Not found", data: result});

    // catch any errors and return info
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });

    // close the connection to the database server
    } finally {
        client.close();
        console.log("disconnected!");
    }
}


module.exports = { postOrderAndDeleteCart };
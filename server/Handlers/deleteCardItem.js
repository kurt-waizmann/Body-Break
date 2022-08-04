const { ObjectId } = require("mongodb");
const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

const deleteCartItem = async (req, res) => {
    // grabbing id with params
const { _id } = req.params;

try {
    // connect to the client
    await client.connect();

    // connect to the database 
    const db = client.db(dbName);

    // grabbing from the collection
    const result = await db
    .collection('cart')
    .deleteOne({_id: ObjectId(_id)})

    // response
    result.deletedCount > 0
    ? res.status(201).json({ status: 201, success: result })
    : res.status(404).json({ status: 404, Massege: "delete Faild" });

    // catch any errors and return info/message
} catch (err) {
    res.status(500).json({status: 500, Massege: err.Massegae})
}
finally 
{
    // close the connection to the database server
    client.close()
}
}

module.exports = {deleteCartItem}
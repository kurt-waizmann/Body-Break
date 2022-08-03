const { ObjectId } = require("mongodb");
const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

const deleteCartItem = async (req, res) => {
const { _id } = req.params;

try {
    await client.connect();
    const db = client.db(dbName);
    const resualt = await db
    .collection('cart')
    .deleteOne({_id: ObjectId(_id)})
    resualt.deletedCount > 0
    ? res.status(201).json({ status: 201, success: resualt })
    : res.status(404).json({ status: 404, Massege: "delete Faild" });
    
} catch (err) {
    res.status(500).json({status: 500, Massege: err.Massegae})
}
finally 
{
    client.close()
}
}

module.exports = {deleteCartItem}
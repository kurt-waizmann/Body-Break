
const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

const getCartDetails = async (res, req) => {
    try {
        await client.connect();
        const db = await client.db(dbName);
        const cartDetails = await
        db.collection('cart').find().toArray();
        cartDetails.length !== 0
        ? res.status(200).json({status:200, data: cartDetails})
        : res.status(400).json({status:400, Message: "cart is empty"})
    } catch (err) {
        req.status(500).json({status:500, Message: err.Message})
    }
    finally {
        client.close();
    }
}


module.exports = { getCartDetails};
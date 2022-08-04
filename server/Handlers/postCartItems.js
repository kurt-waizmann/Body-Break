const { ObjectID } = require("bson");
const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

const postCartItems = async (req, res) => {
  // destructuring body
  const { item_id, qty } = req.body;

  try {
    // connect to the client
    await client.connect();

    // connect to the database 
    const db = client.db(dbName);

    // adding to the collection
    let result = await db
      .collection("cart")
      .updateOne({ item_id: item_id }, { $inc: { qty: 1 } });
    if (result.modifiedCount === 0) {
      let = await db
        .collection("cart")
        .insertOne({ item_id: item_id, qty: parseInt(qty) });
    }

    // response
    result.acknowledged
      ? res.status(200).json({ status: 200, data: result })
      : res
          .status(404)
          .json({ status: 404, Message: "item didnt insert into db" });

  // catch any errors and return info/message
  } catch (err) {
    res.status(500).json({ status: 500, Message: err.Message });

    // close the connection to the database server
  } finally {
    client.close();
  }
};

module.exports = { postCartItems };

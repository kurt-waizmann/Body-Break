const { ObjectID } = require("bson");
const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

const updateCart = async (req, res) => {

  // destructuring body
  const { _id, inc } = req.body;

  try {
    // connect to the client
    await client.connect();

    // connect to the database 
    const db = client.db(dbName);

    // updating cart
    const result = await db
      .collection("cart")
      .updateOne({ _id: ObjectID(_id) }, { $inc: { qty: inc } });

    // response
    result.modifiedCount > 0
      ? res.status(201).json({ status: 201, success: result })
      : res.status(404).json({ status: 404, MAsse: result });

    // catch any errors and return info/message
  } catch (err) {
    res.status(500).json({ status: 500, Massegae: err.Massegae });

    // close the connection to the database server
  } finally {
    client.close();
    //
  }
};

module.exports = { updateCart };

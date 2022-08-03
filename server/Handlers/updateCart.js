const { ObjectID } = require("bson");
const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

const updateCart = async (req, res) => {
  const { _id, inc } = req.body;
  try {
    await client.connect();
    const db = client.db(dbName);
    const resualt = await db
      .collection("cart")
      .updateOne({ _id: ObjectID(_id) }, { $inc: { qty: inc } });
    resualt.modifiedCount > 0
      ? res.status(201).json({ status: 201, success: resualt })
      : res.status(404).json({ status: 404, MAsse: resualt });
  } catch (err) {
    res.status(500).json({ status: 500, Massegae: err.Massegae });
  } finally {
    client.close();
    //
  }
};

module.exports = { updateCart };

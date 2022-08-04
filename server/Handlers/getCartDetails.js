const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

const getCartDetails = async (req, res) => {

  // query variable
  const query = [
    {
      $lookup: {
        from: "items",
        localField: "item_id",
        foreignField: "_id",
        as: "itemInfo",
      },
    },
    { $unwind: "$itemInfo" },
    {
      $project: {
        _id: 1,
        item_id: 1,
        qty: 1,
        name: "$itemInfo.name",
        price: "$itemInfo.price",
        body_location: "$itemInfo.body_location",
        category: "$itemInfo.category",
        imageSrc: "$itemInfo.imageSrc",
        companyId: "$itemInfo.companyId",
        numInStock: "$itemInfo.numInStock",
      },
    },
  ];

  try {
    // connect to the client
    await client.connect();

    // connect to the database 
    const db = await client.db(dbName);

    // grabbing from the collection
    const cartDetails = await db.collection("cart").aggregate(query).toArray();

    //response
    cartDetails.length !== 0
      ? res.status(200).json({ status: 200, data: cartDetails })
      : res.status(404).json({ status: 404, Message: "cart is empty" });

    // catch any errors and return info/message
  } catch (err) {
    res.status(500).json({ status: 500, Message: err.Message });

    // close the connection to the database server
  } finally {
    client.close();
  }
};

module.exports = { getCartDetails };

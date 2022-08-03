const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

const getCartDetails = async (req, res) => {
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
    await client.connect();
    const db = await client.db(dbName);
    const cartDetails = await db.collection("cart").aggregate(query).toArray();
    cartDetails.length !== 0
      ? res.status(200).json({ status: 200, data: cartDetails })
      : res.status(404).json({ status: 404, Message: "cart is empty" });
  } catch (err) {
    res.status(500).json({ status: 500, Message: err.Message });
  } finally {
    client.close();
  }
};

module.exports = { getCartDetails };

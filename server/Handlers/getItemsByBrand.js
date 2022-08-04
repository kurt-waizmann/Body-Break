const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

// returns a list of all items by Brands (companyId)
const getItemsByBrand = async (req, res) => {
    // query variable
  const query = { companyId: parseInt(req.params.brandId) };

  try {
    // connect to the client
    await client.connect();

    // connect to the database 
    const db = client.db(dbName);

    // grabbing from the collection
    const items = await db.collection("items").find(query).toArray();

    //destructure all categories
    const categorys = [...new Set(items.map((item) => item.category))];

    //----------------------------seperate items by category------------------------------------------
    const result = categorys.map((category) => {
      return {
        [category]: [...items.filter((item) => item.category === category)],
      };
    });

    //---------------------------------check for output -------------------------------------
    if (result.length > 0)
      res.status(200).json({ status: 200, data: result });
    else res.status(404).json({ status: 404, Message: `there isn't any item` });

    // catch any errors and return info/message
  } catch (err) {
    res.status(500).json({ status: 500, Message: err.Message });

    // close the connection to the database server
  } finally {
    client.close();
  }
};

module.exports = { getItemsByBrand };

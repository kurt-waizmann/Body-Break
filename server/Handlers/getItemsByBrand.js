const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";
// returns a list of all items by Brands (companyId)
const getItemsByBrand = async (req, res) => {
  const query = { companyId: parseInt(req.params.brandId) };

  try {
    await client.connect();
    const db = client.db(dbName);
    const items = await db.collection("items").find(query).toArray();
    //distinc all categorys
    const categorys = [...new Set(items.map((item) => item.category))];
    //----------------------------seprat items by category------------------------------------------
    const resualt = categorys.map((category) => {
      return {
        [category]: [...items.filter((item) => item.category === category)],
      };
    });

    //---------------------------------check for output -------------------------------------
    if (resualt.length > 0)
      res.status(200).json({ status: 200, data: resualt });
    else res.status(404).json({ status: 404, Message: `there is'nt any item` });
  } catch (err) {
    res.status(500).json({ status: 500, Message: err.Message });
  } finally {
    client.close();
  }
};

module.exports = { getItemsByBrand };

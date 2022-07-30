const { creatClient } = require("./utils");

const client = creatClient();
const dbName = "Group-Project-Watchout";

// returns a list of all items by Brands (companyId)
const getItemsByBrand = async (req, res) => {
  const query = {companyId: parseInt(req.params.brandId)};
  
  try {
    await client.connect();
    const db = client.db(dbName);
    const items = await db.collection("items").find(query).toArray();
    //distinc all categorys
    const categorys = [...new Set(items.map(item => item.category))];
    //----------------------------seprat items by category------------------------------------------
    const resualt = categorys.map((category) => {
        return {
            [category]: [ ...items.filter((item) => item.category === category) ],
        };
    });
    //----------------------------------------------------------------------

    res.status(200).json({data:resualt})
  } catch (err) {
    res.status(500).json({ status: 500, Message: err.Message });
  } finally {
    client.close();
  }
};


// returns a list of all items by Cateory
const getItemsByCatergory = async (req, res) => {
    const query = {category: req.params.category};
    try {
      await client.connect();
      const db = client.db(dbName);
      const items = await db.collection("items").find(query).toArray();
      //distinc all categorys
      const companys = [...new Set(items.map(item => item.companyId))];
      
      //----------------------------seprat items by Brand (companyId)------------------------------------------
      const resualt = companys.map((company) => {
          return {
              [company]: [ ...items.filter((item) => item.companyId === company) ],
          };
      });
      //----------------------------------------------------------------------
  
      res.status(200).json({data:resualt})
    } catch (err) {
      res.status(500).json({ status: 500, Message: err.Message });
    } finally {
      client.close();
    }
  };

// returns a list of all items that selected for buy (Basket)
const getCartDetails = async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const items = await db.collection("cars").find().toArray();
    if (items.length > 0) res.status(200).json({ status: 200, data: items });
    else res.status(400).json({ status: 400, Message: `there is'nt any item` });
  } catch (err) {
    res.status(500).json({ status: 500, Message: err.Message });
  } finally {
    client.close();
  }
};

module.exports = { getItemsByBrand, getItemsByCatergory };

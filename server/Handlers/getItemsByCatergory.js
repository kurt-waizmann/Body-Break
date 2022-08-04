const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

// returns a list of all items by Cateory
const getItemsByCatergory = async (req, res) => {
  // query variable
  const query = [
    {
      $lookup: {
        from: "companies",
        localField: "companyId",
        foreignField: "_id",
        as: "companyInfo",
      },
    },
    {
      $match: {
        $and: [{ category: { $regex: req.params.category, $options: "i" } }],
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        price: 1,
        body_location: 1,
        category: 1,
        imageSrc: 1,
        numInStock: 1,
        companyId: 1,
        companyInfo: "$companyInfo",
      },
    },
  ];
  //---------------------------------------------------------------------
  try {
    // connect to the client
    await client.connect();

    // connect to the database 
    const db = client.db(dbName);

    // grabbing from the collection
    const items = await db.collection("items").aggregate(query).toArray();

    //destructue all companies
    const companies = [...new Set(items.map((item) => item.companyId))];

    //----------------------------seperate items by Brand (companyId)------------------------------------------
    const result = companies.map((company) => {
      return {
        [company]: [...items.filter((item) => item.companyId === company)],
      };
    });
    //---------------------------------check for output -------------------------------------
    if (result.length > 0)
      res.status(200).json({ status: 200, data: result });
    else res.status(404).json({ status: 404, Message: `there is'nt any item` });

    // catch any errors and return info/message
  } catch (err) {
    res.status(500).json({ status: 500, Message: err.Message });

    // close the connection to the database server
  } finally {
    client.close();
  }
};

module.exports = { getItemsByCatergory };

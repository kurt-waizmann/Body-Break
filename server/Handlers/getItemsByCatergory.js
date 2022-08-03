const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

// returns a list of all items by Cateory
const getItemsByCatergory = async (req, res) => {
    //jon items and companies collections by companyId
    const query =     [
        {
        $lookup: {
          from: 'companies',
          localField: 'companyId',
          foreignField: '_id',
          as: 'companyInfo'
          }
        },
        {
        $match:{
          $and:[{"category" : { "$regex" : req.params.category , "$options" : "i"}}]
          }
        },
        {   
        $project:{
          _id : 1,
          name : 1,
          price : 1,
          body_location : 1,
          category : 1,
          imageSrc : 1,
          numInStock: 1,
          companyId: 1,
          companyInfo: "$companyInfo"
          } 
        }
      ];
      //---------------------------------------------------------------------
      try {
          await client.connect();
          const db = client.db(dbName);
          const items = await db.collection("items").aggregate(query).toArray();
          //distinc all comanies
          const companies = [...new Set(items.map((item) => item.companyId))];
          
      //----------------------------seprat items by Brand (companyId)------------------------------------------
      const resualt = companies.map((company) => {
        return {
          [company]: [...items.filter((item) => item.companyId === company)],
        };
      });
      //---------------------------------check for output -------------------------------------
      if (resualt.length > 0)
        res.status(200).json({ status: 200, data: resualt });
      else res.status(204).json({ status: 204, Message: `there is'nt any item` });
    } catch (err) {
      res.status(500).json({ status: 500, Message: err.Message });
    } finally {
      client.close();
    }
  };
  
module.exports = {getItemsByCatergory};  






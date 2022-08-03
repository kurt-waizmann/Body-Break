
const { ObjectID } = require("bson");
const { creatClient } = require("./utils");
const client = creatClient();
const dbName = "Group-Project-Watchout";

const postCartItems = async (req, res) => {
    const {item_id, qty} = req.body;
    try {
        await client.connect();
        const db = client.db(dbName);
        let result = await
            db.collection('cart')
            .updateOne({item_id:item_id},
                {$inc:{qty:1}});
        if(result.modifiedCount === 0){
            let = await db
            .collection('cart')
            .insertOne({item_id:item_id, qty: parseInt(qty)})
        }

            result.acknowledged 
             ? res.status(200).json({status:200, data:result})
<<<<<<< HEAD
             : res.status(204).json({status:204, Message:"item didnt insert into db"})
=======
             : res.status(404).json({status:404, Message:"item didnt insert into db"})
>>>>>>> master
            
    } catch (err) {
        res.status(500).json({status:500, Message: err.Message})
    }
    finally{
        client.close()
    }
}


module.exports = { postCartItems};
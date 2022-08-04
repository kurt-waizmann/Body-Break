'use strict';

const express = require('express');
const morgan = require('morgan');
const { getItemsByBrand } = require('./handlers/getItemsByBrand');
const { getAllItems } = require('./handlers/getAllItems')
const { getCartDetails } = require('./handlers/getCartDetails')
const { getOrderDetails } = require('./handlers/getOrderDetails')
const { postCartItems } = require('./handlers/postCartItems')
const { postOrderAndDeleteCart } = require('./handlers/postOrderAndDeleteCart')
const { updateCart } = require('./handlers/updateCart')
const { getItemsByCatergory } = require('./Handlers/getItemsByCatergory');
const { deleteCartItem } = require('./Handlers/deleteCardItem');




const PORT = 4000;

express()
  .use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))



// GET ENDPOINTS //

  // get all items
  .get("/api/items/all", getAllItems)

  // get items by their brand
  .get("/api/items/brand/:brandId", getItemsByBrand)

  // get items by their category type
  .get("/api/items/category/:category", getItemsByCatergory)

  // get details about what's in the cart
  .get("/api/cart/details", getCartDetails)

  // get details about the completed order
  .get("/api/order/details", getOrderDetails)

  // get bacon
  .get('/bacon', (req, res) => res.status(200).json('🥓'))




// POST ENDPOINTS // 

  // post order after completed purchase AND delete cart
  .post("/api/order/details", postOrderAndDeleteCart)

  // post items into the cart
  .post("/api/cart/details", postCartItems)




// PATCH ENDPOINTS //

  // update cart in database by adding or removing item(s)
  .patch("/api/cart/update", updateCart)

  


  //Delete ENDPOINTS 

  // Delete an item in the cart
  .delete("/api/cart/deleteItem/:_id", deleteCartItem)


  .listen(PORT, () => console.info(`Listening on port ${PORT}`));

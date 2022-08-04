# API Documentation


## **GET Fetches**

### GET All Items 
/api/items/all

### GET items by their brand
/api/items/brand/:brandId

### GET items by their category type
/api/items/category/:category

### GET details about what's in the cart
/api/cart/details

### GET details about the completed order
/api/order/details

--- 

## **POST Fetches**

### POST Order details at purchase AND delete cart
/api/order/details

#### Format:
{
    creditCard: ,
    firstName: ,
    lastName: ,
    address: ,
    email: ,
    items: ,
    cost: ,
}

### POST items into the cart
/api/cart/details

--- 

## **PATCH Fetches**

### PATCH cart in database by adding or removing item(s)
/api/cart/update

--- 

## **DELETE Fetches**

### DELETE an item in the cart
/api/cart/deleteItem/:_id
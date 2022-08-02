import React, { useState } from "react";
import styled from "styled-components";
import { RiShoppingCartFill } from "react-icons/ri";
import { useContext } from "react";
import { CardConext } from "./CardContext";
import { v4 as uuidv4, v4 } from "uuid";

const ProductComponent = (item) => {
  const [quantity, setQuantity] = useState(null);
  const {
    actions: { add_Item },
  } = useContext(CardConext);

  const cartHandler = (id) => {
    add_Item({ qty: quantity, item_id: id });
    console.log(quantity, id);
  };

  const submitFunc = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };
    // console.log("item",item);
  return (
    <>
      <Wrapper key={v4()}>
        <Imgs src={item.item.imageSrc} alt="item.item image" />
        <ProductInfo>
          <ProductName>{item.item.name}</ProductName>
          <Brand>
            <Span>Brand:</Span>
            {item.item.companyInfo.name}
          </Brand>
          <Price>
            <Span>Price:</Span>
            {item.item.price}
          </Price>
          <BodyLocation>
            <Span>Body Location:</Span>
            {item.item.body_location}
          </BodyLocation>
          <NumInStock>
            <Span>Items in stock:</Span>
            {item.item.numInStock}
          </NumInStock>
          {item.item.numInStock > 0 ? (
            <CartWrapper>
              <>
                <AddToCart
                  disabled={false}
                  onClick={() => cartHandler(item.item._id)}
                >
                  <CartSpan>Add To Cart</CartSpan>
                  <RiShoppingCartFill />
                </AddToCart>
                <Quantity>
                  <label>Quantity:</label>
                  <NumberInput
                    type="number"
                    value={quantity}
                    min={1}
                    max={item.item.numInStock}
                    onChange={(e) => submitFunc(e)}
                  ></NumberInput>
                </Quantity>
              </>
            </CartWrapper>
          ) : (
            <OutOfStock>
              <StyledP>Item is temporarily</StyledP>
              <StyledP>out of stock</StyledP>
            </OutOfStock>
          )}
        </ProductInfo>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 370px;
  background-color: #333131;
  border-radius: 4px;
  padding: 15px;
`;
const Imgs = styled.img`
  border-radius: 4px;
  height: 120px;
  width: 120px;
`;
const ProductInfo = styled.div`
  margin-top: 10px;
`;
const ProductName = styled.p`
  margin-bottom: 5px;
`;
const Brand = styled.p`
  flex-direction: row;
  margin: 0px 0px 5px 0px;
`;
const Price = styled.p`
  margin: 0px 0px 5px 0px;
  width: 50px;
`;
const BodyLocation = styled.p`
  margin: 0px 0px 5px 0px;
`;
const NumInStock = styled.p`
  margin: 0px 0px 5px 0px;
`;
const CartWrapper = styled.div`
  width: 83%;
  position: absolute;
  bottom: 20px;
`;
const AddToCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #605d5d;
  text-decoration: none;
  width: 100%;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
`;
const Span = styled.span`
  margin-right: 5px;
  font-weight: bold;
`;
const CartSpan = styled.span`
  margin-right: 10px;
`;
const OutOfStock = styled.div`
  display: flex;
  width: 83%;
  position: absolute;
  bottom: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #da6304;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  padding: 5px;
  /* margin-top: 30px; */
`;
const StyledP = styled.p`
  font-size: 14px;
`;
const Quantity = styled.form`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  background: #605d5d;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  width: 100%;
  height: 30px;
  padding: 10px;
  cursor: pointer;
`;

const NumberInput = styled.input`
  /* width: 50px; */
  /* height: 40px; */
  border-radius: 4px;
  border: none;
`;
export default ProductComponent;

import React from "react";
import styled from "styled-components";
import { BiCart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProductComponent = (item) => {
  let nav = useNavigate();

  useEffect(() => {
    //POST to add item to cart
  }, []);

  const handleSubmit = () => {};

  console.log(item);
  return (
    <>
      <Wrapper key={item.item._id}>
        <Imgs src={item.item.imageSrc} alt="item.item image" />
        <ProductInfo>
          <ProductName>{item.item.name}</ProductName>
          <Brand>
            <Span>Brand:</Span>
            {item.item.companyId}
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
            <AddToCart disabled={false}>
              <CartSpan>Add To Cart</CartSpan>
              <BiCart></BiCart>
            </AddToCart>
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
  flex-direction: column;
  align-items: center;
  width: 180px;
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
const AddToCart = styled.button`
  display: flex;
  align-items: center;
  background: #605d5d;
  text-decoration: none;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #da6304;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
`;
const StyledP = styled.p`
  font-size: 14px;
`;
export default ProductComponent;

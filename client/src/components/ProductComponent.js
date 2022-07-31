import React from "react";
import styled from "styled-components";

const ProductComponent = (item) => {
  return (
    <>
      {item.map((product) => {
        <Wrapper key={product._id}>
          <img src={product.imageSrc} alt="product image" />
          <ProductName>{product.name}</ProductName>
          <Brand>{product.companyId}</Brand>
          <Price>{product.price}</Price>
          <BodyLocation>{product.body_location}</BodyLocation>
          <NumInStock>{product.numInStock}</NumInStock>
          <AddToCart />
        </Wrapper>;
      })}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductName = styled.p``;
const Brand = styled.p``;
const Price = styled.p``;
const BodyLocation = styled.p``;
const NumInStock = styled.p``;
const AddToCart = styled.button``;
export default ProductComponent;

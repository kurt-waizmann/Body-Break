import styled from "styled-components";
import { RiShoppingCartFill } from "react-icons/ri";
import { useState } from "react";
import { CardConext } from "./CardContext";
import { useContext } from "react";

const Item = ({ suggestion }) => {
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

  return (
    <Wrapper key={suggestion._id}>
      <Imgs src={suggestion.imageSrc} />
      <ProductInfo>
        <ProductName>{suggestion.name}</ProductName>
        <Brand>
          <Span>Brand:</Span>
          {suggestion.companyInfo.name}
        </Brand>
        <Price>
          <Span>Price:</Span>
          {suggestion.price}
        </Price>
        <BodyLocation>
          <Span>Body Location:</Span>
          {suggestion.body_location}
        </BodyLocation>
        <NumInStock>
          <Span>Available in stock:</Span>
          {suggestion.numInStock}
        </NumInStock>
        {suggestion.numInStock > 0 ? (
          <>
            <AddToCart
              disabled={false}
              onClick={() => cartHandler(suggestion._id)}
            >
              <CartSpan>Add To Cart</CartSpan>
              <RiShoppingCartFill />
            </AddToCart>
            <Quantity>
              Quantity:
              <input
                type="number"
                min={1}
                max={suggestion.numInStock}
                onChange={(e) => submitFunc(e)}
              ></input>
            </Quantity>
          </>
        ) : (
          <OutOfStock>
            <StyledP>Item is temporarily</StyledP>
            <StyledP>Out of stock</StyledP>
          </OutOfStock>
        )}
      </ProductInfo>
    </Wrapper>
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
  cursor: pointer;
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
  cursor: not-allowed;
`;
const StyledP = styled.p`
  font-size: 14px;
`;

const Quantity = styled.form`
  display: flex;
  align-items: center;
  background: #605d5d;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  width: fit-content;
  cursor: pointer;
`;

export default Item;
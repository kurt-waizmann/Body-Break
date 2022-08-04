import styled from "styled-components";
import { RiShoppingCartFill } from "react-icons/ri";
import { useState } from "react";
import { CartConext } from "./CartContext";
import { useContext } from "react";
import { v4 as uuidv4, v4 } from "uuid";

const Item = ({ suggestion }) => {
  const [quantity, setQuantity] = useState(1);

  const {
    actions: { add_Item },
  } = useContext(CartConext);
  //Following code is to handle our add to cart button which adds the specific item/qty to cart.
  const cartHandler = (id) => {
    add_Item({ qty: quantity, item_id: id });
  };
  //Following code is for selecting our quantity on each item.
  const submitFunc = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  return (
    <Wrapper key={suggestion._id}>
      <ImageWrap>
        <Imgs src={suggestion.imageSrc} />
      </ImageWrap>
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
        <NumInStock>
          <Span>Available in stock:</Span>
          {suggestion.numInStock}
        </NumInStock>
        {suggestion.numInStock > 0 ? (
          <CartWrapper>
            <>
              <Quantity>
                Quantity:
                {/* Mapping through our numInStock for each item so our choice of selecting quantity does not exceed whats actually in stock. It is also whats rendering the quatitys to choose from.*/}
                <Select value={quantity} onChange={(e) => submitFunc(e)}>
                  {[...Array(suggestion.numInStock).keys()].map((i) => {
                    return <option key={v4()}>{i + 1}</option>;
                  })}
                </Select>
              </Quantity>
              <AddToCart
                disabled={false}
                onClick={() => cartHandler(suggestion._id)}
              >
                <CartSpan>Add To Cart</CartSpan>
                <RiShoppingCartFill />
              </AddToCart>
            </>
          </CartWrapper>
        ) : (
          <OutOfStock>
            <StyledP>Out of stock</StyledP>
          </OutOfStock>
        )}
      </ProductInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 420px;
  background-color: #333131;
  border-radius: 4px;
  padding: 0 15px 15px 15px;
`;
const ImageWrap = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: white;
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
  color: #80b3c4;
`;
const Brand = styled.p`
  flex-direction: row;
  margin: 0px 0px 5px 0px;
`;
const Price = styled.p`
  margin: 0px 0px 5px 0px;
  width: 50px;
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
  background: #8e8b8b;
  text-decoration: none;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
  &:active {
    background-color: #777474;
  }
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
  height: 30px;
  position: absolute;
  bottom: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ff9f00;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  cursor: not-allowed;
  opacity: 0.5;
`;
const StyledP = styled.p`
  font-size: 14px;
`;

const Quantity = styled.form`
  display: flex;
  font-size: 14px;
  align-items: center;
  background: inherit;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  width: 100%;
  height: 30px;
  padding: 10px;
  cursor: pointer;
`;

const Select = styled.select`
  width: 40px;
  height: 20px;
  margin-left: 20px;
  border: none;
  border-radius: 4px;
  background-color: #8e8b8b;
  color: white;
  cursor: pointer;
`;
export default Item;

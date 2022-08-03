import styled from "styled-components";
import { RiShoppingCartFill } from "react-icons/ri";
import { useState } from "react";
import { CardConext } from "./CardContext";
import { useContext } from "react";
import { v4 as uuidv4, v4 } from "uuid";


const Item = ({ suggestion }) => {
  const [quantity, setQuantity] = useState(null);

  const {
    actions: { add_Item },
  } = useContext(CardConext);

  const cartHandler = (id) => {
    add_Item({ qty: quantity, item_id: id });
    console.log(quantity, id)
  };

  const submitFunc = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  const dropDowm = (qty) => {
    const menu = []
    for (let i = 0; i < qty; i++) {
      menu.push(<option value={quantity} key={v4()} >{i+1}</option>) 
    }
    return menu;
  }

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
        {/* <BodyLocation>
          <Span>Body Location:</Span>
          {suggestion.body_location}
        </BodyLocation> */}
        <NumInStock>
          <Span>Available in stock:</Span>
          {suggestion.numInStock}
        </NumInStock>
        {suggestion.numInStock > 0 ? (
          <CartWrapper>
            <>
              <Quantity>
                Quantity:
                <Select onChange={(e) => submitFunc(e)}>
                    {dropDowm(suggestion.numInStock)}
                  </Select>
                {/* <NumberInput
                  type="number"
                  min={1}
                  max={suggestion.numInStock}
                  onChange={(e) => submitFunc(e)}
                  required
                ></NumberInput> */}
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
            {/* <StyledP>Item is temporarily</StyledP> */}
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
`

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
  color: #80B3C4;

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
  background: #8E8B8B;
  text-decoration: none;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
  &:active{
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
  background: #FF9F00;
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
//OLD CODE
// const Quantity = styled.form`
//   display: flex;
//   align-items: center;
//   background: #605d5d;
//   text-decoration: none;
//   border: none;
//   border-radius: 4px;
//   margin-top: 20px;
//   width: fit-content;
//   cursor: pointer;
// `;
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
const NumberInput = styled.input`
  /* width: 50px; */
  /* height: 40px; */
  border-radius: 4px;
  border: none;
  margin-left: 40px;
`;

const Select = styled.select`
  width: 40px;
  height: 20px;
  margin-left: 20px;
  border: none;
  border-radius: 4px;
  background-color: #8E8B8B;
  color: white;
  cursor: pointer;
`

export default Item;

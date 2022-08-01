import styled from "styled-components";
import Header from "./Header";
import Banner from "./Banner";
import { useContext } from "react";
import { AllItemsContext } from "./AllItemsContext";
import { RiShoppingCartFill } from "react-icons/ri";
import { CardConext } from "./CardContext";

const Homepage = () => {
  const { items } = useContext(AllItemsContext);
  // const {
  //   actions: { add_Item },
  // } = useContext(CardConext);

  // Mapping through items for all of the items data then while loop to push a randomly suggested 24 items each time you load homepage.
  const suggestions = [];
  const suggested = items.map((item) => item);
  while (suggestions.length < 24) {
    suggestions.push(suggested[Math.floor(Math.random() * suggested.length)]);
  }

  const cartHandler = (_id) => {
    // add_Item({ qty: 1, item_id: _id });
  };

  return (
    <>
      <Container>
        <div>
          <Header />
          <Title>BodyBreak</Title>
          <Banner />
          <ImgDiv>
            {suggestions.map((suggestion, key) => {
              return (
                <Wrapper key={key}>
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
                      <AddToCart
                        disabled={false}
                        onClick={() => cartHandler(suggestion._id)}
                      >
                        <CartSpan>Add To Cart</CartSpan>
                        <RiShoppingCartFill />
                      </AddToCart>
                    ) : (
                      <OutOfStock>
                        <StyledP>Item is temporarily</StyledP>
                        <StyledP>Out of stock</StyledP>
                      </OutOfStock>
                    )}
                  </ProductInfo>
                </Wrapper>
              );
            })}
          </ImgDiv>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #1c1b1b;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #04d9ff;
  font-size: x-large;
  padding: 30px;
`;

const ImgDiv = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 50px;
  color: white;
`;

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
export default Homepage;

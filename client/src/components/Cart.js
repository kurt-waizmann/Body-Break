import styled from "styled-components";
import { useContext, useEffect } from "react";
import { CartConext } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  //get context
  const {
    state,
    actions: { get_Items, update_item_qty, delete_Item },
  } = useContext(CartConext);
  //get items from context
  useEffect(() => {
    get_Items();
  }, []);

  //update numInStock if quantity bought is less than numInStock
  const addFunc = (_id, numInStock, qty) => {
    if (qty < numInStock) update_item_qty({ _id: _id, inc: 1 });
  };
  //subtract items from cart
  const subtractFunc = (_id, qty) => {
    if (qty > 1) update_item_qty({ _id: _id, inc: -1 });
  };

  const nav = useNavigate();

  //calculate subtotal of all items in cart
  const sum = state.cardList.reduce((accumulator, curValue) => {
    const price = Math.floor(curValue.price.slice(1, curValue.price.length));
    return accumulator + curValue.qty * price;
  }, 0);

  return (
    <>
      <Wrapper>
        <InnerWrap>
          <Summary>
            <Title>Shopping Cart</Title>
            {/* if cart info recieved map out items in cart */}
            {state.cardList?.length && (
              <div>
                {state.cardList.map((item) => {
                  return (
                    <div key={item.item_id}>
                      <ItemWrapper>
                        <ImgNamePrice>
                          <ItemImg src={item.imageSrc} />
                          <ItemInfo>
                            <Item>{item.name}</Item>
                            <Price>Price: {item.price}</Price>
                          </ItemInfo>
                        </ImgNamePrice>
                        <QuantityBox>
                          <Quantity>
                            <ButtonBox>
                              <div>Quantity: {item.qty}</div>
                              <Buttons
                                onClick={() => subtractFunc(item._id, item.qty)}
                              >
                                -
                              </Buttons>
                              <Buttons
                                onClick={() =>
                                  addFunc(item._id, item.numInStock, item.qty)
                                }
                              >
                                +
                              </Buttons>
                            </ButtonBox>

                            <Delete onClick={() => delete_Item(item._id)}>
                              Delete
                            </Delete>
                          </Quantity>
                        </QuantityBox>
                      </ItemWrapper>
                    </div>
                  );
                })}
              </div>
            )}
            <Subtotal>Subtotal: ${sum}</Subtotal>
            {state.cardList.length !== 0 && (
              <Button onClick={() => nav("/orderform")}>Complete Order</Button>
            )}
          </Summary>
        </InnerWrap>
      </Wrapper>
    </>
  );
};

export default Cart;

const ImgNamePrice = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  background-color: #1c1b1b;
  color: white;
`;

const InnerWrap = styled.div`
  height: 100%;
  width: 65%;
  margin: auto;
`;

const Summary = styled.div`
  margin-top: 65px;
  border-radius: 3%;
  background-color: #313131;
  color: white;
  padding: 20px;
`;
const Title = styled.div`
  margin-bottom: 10px;
  font-size: 30px;
`;
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: auto;
  background-color: #333131;
  /* margin:0; */
  /* border-radius: 4px; */
  padding: 15px;
  border-bottom: 1px solid #02a4d3;
`;
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const ItemImg = styled.img`
  border-radius: 4px;
  width: 100px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  color: #02a4d3;
  height: 40px;
  width: 150px;
  border: 1px solid;
  border-color: #04d9ff;
  background-color: black;
  border-radius: 5px;
  margin-top: 5px;
  :hover {
    cursor: pointer;
    color: black;
    background-color: #02a4d3;
    transition-timing-function: ease-in-out;
    transition-duration: 450ms;
  }
`;

const Item = styled.div`
  margin-bottom: 15px;
  padding: 1px;
`;

const Price = styled.div`
  padding: 1px;
`;

const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 8px;
  width: 180px;
`;
const QuantityBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
const Buttons = styled.button`
  color: #02a4d3;
  height: 30px;
  width: 30px;
  border: 1px solid;
  border-color: #02a4d3;
  background-color: black;
  border-radius: 5px;
  margin-top: 5px;
  :hover {
    cursor: pointer;
    color: black;
    background-color: #02a4d3;
    transition-timing-function: ease-in-out;
    transition-duration: 450ms;
  }
`;

const Delete = styled.button`
  color: #02a4d3;
  height: 40px;
  width: auto;
  border: 1px solid;
  border-color: #02a4d3;
  background-color: black;
  border-radius: 5px;
  margin-top: 5px;
  :hover {
    cursor: pointer;
    color: black;
    background-color: #02a4d3;
    transition-timing-function: ease-in-out;
    transition-duration: 450ms;
  }
`;
const Subtotal = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

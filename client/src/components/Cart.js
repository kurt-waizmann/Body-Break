import styled from "styled-components";
import Header from "./Header";
import { useContext, useEffect } from "react";
import { CardConext } from "./CardContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    state,
    actions: { get_Items, update_item_qty, delete_Item },
  } = useContext(CardConext);
  console.log("hellooo", state.cardList, state);

  useEffect(() => {
    get_Items();
    console.log("useEffect", state.cardList);
  }, []);

  const addFunc = (_id, numInStock, qty) => {
    if (qty < numInStock) update_item_qty({ _id: _id, inc: 1 });
  };

  const subtractFunc = (_id, qty) => {
    if (qty > 1) update_item_qty({ _id: _id, inc: -1 });
  };

  const nav = useNavigate();
  const sum = state.cardList.reduce((accumulator, curValue) => {
    const price = Math.floor(curValue.price.slice(1, curValue.price.length));
    return accumulator + curValue.qty * price;
  }, 0);

  return (
    <>
      <Wrapper>
        <Header />
        <InnerWrap>
          <Summary>
            <Title>Shopping Cart</Title>
            {state.cardList?.length && (
              <div>
                {state.cardList.map((item) => {
                  return (
                    <div key={item.item_id}>
                      <Item>{item.name}</Item>
                      <Price>Price: {item.price}</Price>
                      <Quantity>
                        Quantity: {item.qty}
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
                        <Delete onClick={() => delete_Item(item._id)}>
                          Delete
                        </Delete>
                      </Quantity>
                    </div>
                  );
                })}
              </div>
            )}
            <div>Subtotal: ${sum}</div>
            <Button onClick={() => nav("/orderform")}>Complete Order</Button>
          </Summary>
        </InnerWrap>
      </Wrapper>
    </>
  );
};

export default Cart;

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  background-color: #1c1b1b;
  color: white;
`;

const InnerWrap = styled.div`
  height: 100%;
  width: 45%;
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
  font-size: 30px;
`;

const Button = styled.button`
  color: #04d9ff;
  height: 40px;
  width: 150px;
  border: 1px solid;
  border-color: #04d9ff;
  background-color: black;
  border-radius: 5px;
  margin-top: 5px;
  :before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: #04d9ff;
    top: 15%;
    left: 72%;
    right: 0;
    height: 20px;
    width: 30px;
    transform: perspective(1em) rotateX(40deg) scale(0.5, 0.6);
    filter: blur(1em);
  }
  :hover {
    cursor: pointer;
    color: black;
    background-color: #04d9ff;
    transition-timing-function: ease-in-out;
    transition-duration: 450ms;
  }
`;

const Item = styled.div`
  margin-top: 8px;
  padding: 1px;
`;

const Price = styled.div`
  padding: 1px;
`;

const Quantity = styled.div`
  margin-bottom: 8px;
  border-bottom: 1px solid #04d9ff;
  /* width: fit-content; */
`;

const Buttons = styled.button`
  color: #04d9ff;
  height: 30px;
  width: 30px;
  border: 1px solid;
  border-color: #04d9ff;
  background-color: black;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
  :hover {
    cursor: pointer;
    color: black;
    background-color: #04d9ff;
    transition-timing-function: ease-in-out;
    transition-duration: 450ms;
  }
`;

const Delete = styled.button`
  color: #04d9ff;
  height: 40px;
  width: fit-content;
  border: 1px solid;
  border-color: #04d9ff;
  background-color: black;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
  :hover {
    cursor: pointer;
    color: black;
    background-color: #04d9ff;
    transition-timing-function: ease-in-out;
    transition-duration: 450ms;
  }
`;

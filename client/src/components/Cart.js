import styled from "styled-components";
import Header from "./Header";
import { useContext, useEffect } from "react";
import { CardConext } from "./CardContext";

const Cart = () => {
  const {
    state,
    actions: { get_Items },
  } = useContext(CardConext);

  useEffect(() => {
    get_Items();
    console.log("useEffect", state.cardList);
  }, []);

  // state.cardList
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
                    <>
                      <div>{item.name}</div>
                      <div>{item.price}</div>
                      <div>{item.qty}</div>
                    </>
                  );
                })}
              </div>
            )}
            <Button>Complete Order</Button>
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
  height: 100%;
`;

const InnerWrap = styled.div`
  height: 87%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Summary = styled.div`
  width: 50%;
  border-radius: 3%;
  background-color: #313131;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
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

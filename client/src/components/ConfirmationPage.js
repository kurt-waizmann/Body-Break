import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartConext } from "./CartContext";

const ConfirmationPage = () => {
  const {
    actions: { get_Items },
  } = useContext(CartConext);
  const [confirmation, setConfirmation] = useState(null);
  // This fetch gets all the details regarding an order in our order collection from database.
  useEffect(() => {
    fetch(`/api/order/details`)
      .then((res) => res.json())
      .then((data) => {
        setConfirmation(data.data);
      });
    get_Items();
  }, []);

  return (
    <>
      <Wrapper>
        <InnerWrap>
          {/* condition rendering for our confirmation page/info */}
          {confirmation && (
            <>
              <Title>Thank you for your purchase!</Title>
              <Summary>
                <OrderSummary>
                  <Order>
                    <div>
                      Confimation Number: <Details>{confirmation._id}</Details>
                    </div>
                    <span>
                      Number of Items:{" "}
                      <Details>{confirmation.items.length}</Details>{" "}
                    </span>
                    <span>
                      Cost: <Details>$ {confirmation.cost}</Details>{" "}
                    </span>
                  </Order>
                  <Line />
                  <Order>
                    <div>
                      Name:{" "}
                      <Details>
                        {confirmation.firstName} {confirmation.lastName}
                      </Details>{" "}
                    </div>
                    <div>
                      Address: <Details>{confirmation.address}</Details>{" "}
                    </div>
                    <div>
                      Email: <Details>{confirmation.email}</Details>{" "}
                    </div>
                  </Order>
                </OrderSummary>
              </Summary>
              <Button to={"/"}>Return to Homepage</Button>
            </>
          )}
        </InnerWrap>
      </Wrapper>
    </>
  );
};

export default ConfirmationPage;

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
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
  border-radius: 3%;
  background-color: #313131;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const Title = styled.div`
  font-size: 30px;
  color: #04d9ff;
  margin-bottom: 20px;
`;
const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Order = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Details = styled.span`
  color: #02a4d3;
  margin: 0 4px 0 4px;
`;

const Line = styled.div`
  border-bottom: 2px solid #02a4d3;
`;

const Button = styled(Link)`
  text-decoration: none;
  background-color: inherit;
  border: none;
  color: #878787;
  font-size: 15px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  position: relative;
  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    border-bottom: 1px solid #02a4d3;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 400ms ease-in-out;
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

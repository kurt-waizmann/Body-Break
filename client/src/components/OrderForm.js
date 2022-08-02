import styled from "styled-components";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const OrderForm = () => {
  const [creditcard, setCreditcard] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const submitFunc = (ev) => {
    ev.preventDefault();
    const orderId = uuidv4();
    fetch("/api/order/details", {
      method: "POST",
      body: JSON.stringify({
        _id: orderId,
        creditCard: creditcard,
        firstName: firstName,
        lastName: lastName,
        address: address,
        email: email,
        items: "needs Functionality",
        cost: "needs Functionality",
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/confirmationpage");
      });
  };

  return (
    <>
      <Wrapper>
        <Header />
        <Body>
          <InnerWrap>
            <PersonDetails>
              <Title>Order Details</Title>
              <Form onSubmit={(ev) => submitFunc(ev)}>
                <Section>
                  <label>Credit Card Number:</label>
                  <Input
                    type="tel"
                    inputmode="numeric"
                    pattern="[0-9\s]{13,19}"
                    autocomplete="cc-number"
                    maxlength="16"
                    placeholder="xxxx xxxx xxxx xxxx"
                    autoFocus
                    required
                    onChange={(ev) => setCreditcard(ev.target.value)}
                  />
                </Section>
                <Section>
                  <label>First name:</label>
                  <Input
                    type="text"
                    id="fname"
                    name="fname"
                    required
                    onChange={(ev) => setFirstName(ev.target.value)}
                  />
                </Section>
                <Section>
                  <label>Last name:</label>
                  <Input
                    type="text"
                    id="lname"
                    name="lname"
                    required
                    onChange={(ev) => setLastName(ev.target.value)}
                  />
                </Section>
                <Section>
                  <label>Address:</label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    required
                    onChange={(ev) => setAddress(ev.target.value)}
                  />
                </Section>
                <Section>
                  <label>Email:</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </Section>
                <SubInput type="submit" />
              </Form>
            </PersonDetails>
          </InnerWrap>
        </Body>
      </Wrapper>
    </>
  );
};

export default OrderForm;

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  background-color: #1c1b1b;
  color: white;
  height: 100%;
`;

const Body = styled.div`
  width: 100%;
  height: 87%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerWrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PersonDetails = styled.div`
  flex: 0.5;
  height: 500px;
  border-radius: 3%;
  background-color: #313131;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 10px;
`;
const Title = styled.div`
  font-size: 30px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Input = styled.input`
  border: none;
  text-decoration: none;
  width: 200px;
`;

const CostDetails = styled.div`
  flex: 1;
  height: 500px;
  border-radius: 3%;
  background-color: #313131;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

// const Button = styled.button`
//   color: #04d9ff;
//   height: 40px;
//   width: 200px;
//   border: 1px solid;
//   border-color: #04d9ff;
//   background-color: black;
//   border-radius: 5px;
//   :before {
//     pointer-events: none;
//     content: "";
//     position: absolute;
//     background: #04d9ff;
//     top: 15%;
//     left: 72%;
//     right: 0;
//     height: 20px;
//     width: 30px;
//     transform: perspective(1em) rotateX(40deg) scale(0.5, 0.6);
//     filter: blur(1em);
//   }
//   :hover {
//     cursor: pointer;
//     color: black;
//     background-color: #04d9ff;
//     transition-timing-function: ease-in-out;
//     transition-duration: 400ms;
//   }
// `;

const SubInput = styled.input`
  color: #04d9ff;
  height: 40px;
  width: 200px;
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
    transition-duration: 400ms;
  }
`;

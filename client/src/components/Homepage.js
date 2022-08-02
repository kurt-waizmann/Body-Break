import styled from "styled-components";
import Header from "./Header";
import Banner from "./Banner";
import { useContext } from "react";
import { AllItemsContext } from "./AllItemsContext";
import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item";

const Homepage = () => {
  const { items } = useContext(AllItemsContext);
  const [suggestions, setSuggestions] = useState([]);

  // Mapping through items for all of the items data then while loop to push a randomly suggested 24 items each time you load homepage.
  useEffect(() => {
    const suggested = [];
    while (suggested.length < 24) {
      suggested.push(items[Math.floor(Math.random() * items.length)]);
    }
    setSuggestions(suggested);
  }, []);

  return (
    <>
      <Container>
        <div>
          <Header />
          <Title>BodyBreak</Title>
          <Banner />
          <ImgDiv>
            {suggestions.map((suggestion, key) => (
              <Item suggestion={suggestion} />
            ))}
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
  padding-top: 50px;
  padding-bottom: 50px;
`;

export default Homepage;

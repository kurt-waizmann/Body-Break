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
    const suggested = items.map((item) => item);
    while (suggestions.length < 24) {
      suggestions.push(suggested[Math.floor(Math.random() * suggested.length)]);
    }
    setSuggestions(suggestions);
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
  padding-top: 50px;
  padding-bottom: 50px;
`;

export default Homepage;

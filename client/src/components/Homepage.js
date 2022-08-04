import styled from "styled-components";
import Banner from "./Banner";
import { useContext } from "react";
import { AllItemsContext } from "./AllItemsContext";
import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item";

const Homepage = () => {
  const { items } = useContext(AllItemsContext);
  const [suggestions, setSuggestions] = useState([]);

  // While loop to push a randomly suggested 24 items each time you load homepage. If statement is so items that are currently out of stock are not put out on display as suggested.
  useEffect(() => {
    const suggested = [];
    while (suggested.length < 24) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      if (randomItem.numInStock > 0) {
        suggested.push(randomItem);
      }
    }
    setSuggestions(suggested);
  }, []);

  return (
    <>
      <Container>
        <div>
          <Banner />
          <ImgDiv>
            {/* Mapping through the suggested 24 items to render them */}
            {suggestions.map((suggestion, key) => (
              <Item suggestion={suggestion} key={key} />
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

const ImgDiv = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 50px;
  color: white;
  padding-top: 20px;
  padding-bottom: 50px;
`;

export default Homepage;

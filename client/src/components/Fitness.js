import styled from "styled-components";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import { AllItemsContext } from "./AllItemsContext";
import ProductComponent from "./ProductComponent";
import CategoryFilter from "./CategoryFilter";
import Footer from "./Footer";

const Fitness = () => {
  const { items } = useContext(AllItemsContext);
  //Get category from params
  const { category } = useParams();
  // console.log("params", category);
  //use params to filter items from category
  const categoryItems = CategoryFilter(category);
  // console.log(categoryItems)

  return (
    <>
      <Wrapper>
        <Header />
        <Title>{category}</Title>
        <Container>
          {categoryItems?.length > 0 &&
            categoryItems.map((item) => {
              return <ProductComponent item={item} />;
            })}
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  background-color: #1c1b1b;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  /* color: #04d9ff; */
  color: #02A4D3;
  font-size: x-large;
  padding: 30px;
  /* text-decoration: underline; */
  text-transform: capitalize;
`;
const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 20px;
  color: white;
`;
export default Fitness;

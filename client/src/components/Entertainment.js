import styled from "styled-components";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
import CategoryFilter from "./CategoryFilter";
import { AllItemsContext } from "./AllItemsContext";

const Entertainment = () => {
    //get items context
    const { items } = useContext(AllItemsContext);
    //Get category from params
    const { fitness } = useParams();
    //use params to filter items from category
    const category = CategoryFilter(fitness);
  return (
    <>
      <Wrapper>
        <Header />
        <Title>Entertainment</Title>
        <Container>
          {category?.length > 0 &&
            category.map((item) => {
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
  color: #04d9ff;
  font-size: x-large;
  padding: 30px;
  text-decoration: underline;
`;
const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin: 10px;
  gap: 20px;
  color: white;
`;
export default Entertainment;

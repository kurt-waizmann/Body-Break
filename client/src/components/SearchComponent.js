import React, { useContext } from "react";
import styled from "styled-components";
import { AllItemsContext } from "./AllItemsContext";
import ProductComponent from "./ProductComponent";

const SearchComponent = (item) => {
  const { items, searchId } = useContext(AllItemsContext);
  const searchItem = items.filter((item) => {
    return item._id === searchId;
  });
  console.log(searchItem);
  return (
    <Wrapper>
      <ProductComponent item={searchItem[0]} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1c1b1b;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
`;

export default SearchComponent;

import React, { useContext } from "react";
import styled from "styled-components";
import { AllItemsContext } from "./AllItemsContext";
import ProductComponent from "./ProductComponent";
import { NavLink, useNavigate } from "react-router-dom";

const SearchComponent = (item) => {
  //get items and search result id from context
  const { items, searchId } = useContext(AllItemsContext);
  let nav = useNavigate();
  //find search result in items based on searchId
  const searchItem = items.filter((item) => {
    return item._id === searchId;
  });
  //if page is refreshed and searchId is null, navigate back to homepage. Otherwise render the product information inside ProductComponent.
  if (searchId === null) {
    nav("/");
    return <NavLink to="/" />;
  } else {
    return (
      <Wrapper>
        <ProductComponent item={searchItem[0]} />
      </Wrapper>
    );
  }
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

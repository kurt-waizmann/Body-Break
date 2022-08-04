import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import { AllItemsContext } from "./AllItemsContext";
import ProductComponent from "./ProductComponent";
import CategoryFilter from "./CategoryFilter";
import CategoryBanner from "./CategoryBanner";

const CategoryComponent = () => {
  //get items information from context
  const { items } = useContext(AllItemsContext);
  //Get category from params
  const { category } = useParams();
  //use params to filter items by category
  const categoryItems = CategoryFilter(category);

  return (
    <>
      <Wrapper>
        <CategoryBanner category={category} />
        <Container>
          {/* allitems page has different map than other catagories, so we check params to check for allitems params */}
          {category === "allitems"
            ? items.map((item, index) => {
                return <ProductComponent key={v4()} item={item} />;
              })
            : categoryItems?.length > 0 &&
              categoryItems.map((item, index) => {
                return <ProductComponent key={v4()} item={item} />;
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

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 20px;
  color: white;
`;
export default CategoryComponent;

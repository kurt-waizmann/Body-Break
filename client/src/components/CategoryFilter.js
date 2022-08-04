import { useContext } from "react";
import { AllItemsContext } from "./AllItemsContext";

const CategoryFilter = (params) => {
  //get all items from context
  const { items } = useContext(AllItemsContext);
  //filter items using params and return result
  const category = items.filter((item) => {
    return item.category.toLowerCase() === params.toLowerCase();
  });
  return category;
};

export default CategoryFilter;

import { useContext } from "react";
import { AllItemsContext } from "./AllItemsContext";

const CategoryFilter = (params) => {
  const { items } = useContext(AllItemsContext);
  const category = items.filter((item) => {
    return item.category.toLowerCase() === params.toLowerCase();
  });
  return category;
};

export default CategoryFilter;

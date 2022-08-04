import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";

const CategoryFetch = (category) => {
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const res = await fetch(`/api/items/category/${category}`);
        const data = await res.json();
        setCategoryData(data.data);
      } catch (err) {}
    };
    fetchFunc();
  }, []);

  if (categoryData === null) {
    return <LoadingPage />;
  }

  return categoryData;
};

export default CategoryFetch;

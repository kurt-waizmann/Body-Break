import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";

const CategoryFetch = (category) => {
  const [categoryData, setCategoryData] = useState(null);
  // console.log(category)
  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const res = await fetch(`/api/items/category/${category}`);
        const data = await res.json();
        // console.log("fetch category", data.data);
        setCategoryData(data.data);
      } catch (err) {
        // console.log("Category fetch error");
      }
    };
    fetchFunc();
  }, []);

//   if (setBrandsStatus === "Error") {
//     return <>Error</>;
//   }

  if (categoryData === null) {
    return <LoadingPage />;
  }

  return categoryData;
};

export default CategoryFetch;

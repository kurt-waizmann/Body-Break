import { createContext, useEffect, useState } from "react";

export const BrandContext = createContext();

export const BrandContextProvider = ({ children }) => {
  const [brands, setBrands] = useState(null);
  const [brandsStatus, setBrandsStatus] = useState("Loading");
  // console.log(brands)

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const res = await fetch("/api/companies");
        const data = await res.json();
        setBrands(data.data);
        setBrandsStatus("Idle");
      } catch (err) {
        setBrandsStatus("Error");
      }
    };
    fetchFunc();
  }, []);

  if (setBrandsStatus === "Error") {
    return <>Error</>;
  }

  if (brands === null) {
    return <>Loading</>;
  }

  return (
    <BrandContext.Provider
      value={{
        brands,
        setBrands,
        brandsStatus,
        setBrandsStatus,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

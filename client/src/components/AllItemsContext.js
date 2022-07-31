import { createContext, useEffect, useState } from "react";

export const AllItemsContext = createContext();

export const AllItemsProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [itemsStatus, setItemsStatus] = useState("Loading");

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const res = await fetch("/api/items/all");
        const data = await res.json();
        setItems(data.data);
        setItemsStatus("Idle");
      } catch (err) {
        setItemsStatus("Error");
      }
    };
    fetchFunc();
  }, []);

  if (setItemsStatus === "Error") {
    return <>Error</>;
  }

  if (items === null) {
    return <>Loading</>;
  }

  return (
    <AllItemsContext.Provider
      value={{ items, setItems, itemsStatus, setItemsStatus }}
    >
      {children}
    </AllItemsContext.Provider>
  );
};
import { createContext, useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";

export const AllItemsContext = createContext();

export const AllItemsProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [itemsStatus, setItemsStatus] = useState("Loading");
  const [dropdownSelection, setDropdownSelection] = useState(null);
  const [searchId, setSearchId] = useState(null);

  // Context/fetch for getting all of our items via db(database)
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

  //Catch errors if fetch fails
  if (setItemsStatus === "Error") {
    return <>Error</>;
  }

  if (items === null) {
    return <LoadingPage />;
  }

  return (
    <AllItemsContext.Provider
      value={{
        items,
        setItems,
        itemsStatus,
        setItemsStatus,
        dropdownSelection,
        setDropdownSelection,
        searchId,
        setSearchId,
      }}
    >
      {children}
    </AllItemsContext.Provider>
  );
};

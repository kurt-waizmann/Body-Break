import { createContext, useReducer } from "react";
import { getDataFromServer, sentDataToServer } from "./handler";

const initialState = {
  status: "idl", //idle,addItem,redData,deleteItem
  cardList: [],
  userId: null, // for Strech goal
};

const reducer = (state, action) => {
  console.log("action", action)
  switch (action.type) {
    case "Add_Item_To_Card": {
      return { ...state, cardList: [...action.items] };
    }
    case "Get_Items_From_Card":
      return { ...state, cardList: [...action.items] };
    
    case "Delete_Item_From_Card":
      return {...state, cardList:[...action.items]}
      break;
    case "Update_Item's_Qty":
      return {...state, cardList:[...action.items]}
    default:
      break;
  }
};

export const CardConext = createContext(null);

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("Meysam state", state)

  // this function use for add item into the card
  const add_Item = async (item) => {
    const addItem = await sentDataToServer("/api/cart/details", "Post", {
      item_id: item.item_id,
      qty: item.qty,
    });
    if (addItem) {
      const result = await getDataFromServer("/api/cart/details");
      dispatch({
        type: "Add_Item_To_Card",
        items: result,
      });
    }
  };
  // this function use for delete item from the card
  const delete_Item = async (_id) => {
    const deleteItem = await sentDataToServer(`/api/cart/deleteItem/${_id}`,"delete");
    if(deleteItem){
      const data = await getDataFromServer("/api/cart/details");
      dispatch({
        type: "Delete_Item_From_Card",
        items: data,
      });
    }
  };
  // this function use for Update item qty in the card
  const get_Items = async () => {
    const result = await getDataFromServer("/api/cart/details");
    console.log("dispatcher", result)
    dispatch({
      type: "Get_Items_From_Card",
      items: result,
    });
  };

    // this function use for Update item qty in the card
    const update_item_qty = async (body) => {
      const updateItem = await sentDataToServer(`/api/cart/update/`,'PATCH',body);
      console.log("dispatcher", updateItem)
      if (updateItem){
        const result = await getDataFromServer("/api/cart/details");
        dispatch({
          type: "Update_Item's_Qty",
          items: result,
        });
      }
    };

  return (
    <CardConext.Provider
      value={{
        state,
        actions: {
          add_Item, 
          get_Items,
          update_item_qty,
          delete_Item },
      }}
    >
      {children}
    </CardConext.Provider>
  );
};

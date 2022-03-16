import { createContext } from "react";

const ItemsContext = createContext({
  items: [],
  addItem: () => {},
  toggleItemComplete: () => {},
  deleteItem: () => {},
});

export { ItemsContext };

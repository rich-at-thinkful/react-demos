import { createContext } from "react";

const ItemsContext = createContext({
  items: [],
  toggleItemComplete: () => {},
  deleteItem: () => {},
});

export { ItemsContext };

import { createContext, useContext, useState } from 'react';

const ShoppingListContext = createContext();

export function ShoppingListProvider({ children }) {
  const [shoppingList, setShoppingList] = useState([]);

  const addItem = (item) => {
    setShoppingList((prev) => {
      // Evita duplicatas pelo id
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, { ...item, checked: false }];
    });
  };

  const removeItem = (id) => {
    setShoppingList((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setShoppingList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <ShoppingListContext.Provider value={{ shoppingList, addItem, removeItem, toggleItem }}>
      {children}
    </ShoppingListContext.Provider>
  );
}

export function useShoppingList() {
  return useContext(ShoppingListContext);
} 
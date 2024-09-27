import { notification } from "antd";
import { createContext, useState } from "react";

export const Context = createContext({
  compareItems: [],
  addItemsToCompare: () => {},
  removeItems: () => {},
  openNotification: () => {},
  darkTheme: false,
});

export default function ContextProvider({ children }) {
  const [compareItems, setCompareItems] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }

  function addItemsToCompare(item) {
    setCompareItems((prev) => [...prev, item]);
  }

  function removeItems(item) {
    const filteredItem = compareItems.filter((data) => data.id !== item.id);
    setCompareItems(filteredItem);
  }

  function openNotification(Product, action, type = "info", notifyMessage) {
    let message;
    if (
      action === null &&
      (compareItems.length < 2 || compareItems.length >= 4)
    ) {
      message = notifyMessage;
    } else {
      message = `${Product} ${action} for comparison`;
    }

    notification[type]({
      message,
      placement: "topRight",
      duration: 1.5,
      height: 20,
    });
  }

  return (
    <Context.Provider
      value={{
        compareItems,
        addItemsToCompare,
        removeItems,
        openNotification,
        toggleTheme,
        darkTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
}

import { useState } from "react";

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [currentValue, setCurrentValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setLocalStorageValue = (value: T) => {
    try {
      const valueItem = value instanceof Function ? value(currentValue) : value;
      setCurrentValue(valueItem);
      localStorage.setItem(key, JSON.stringify(valueItem));
    } catch (err) {
      console.log("Fail to set value in useLocalStorage");
    }
  };
  return [currentValue, setLocalStorageValue];
};

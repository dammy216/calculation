import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
      const jsonValue = window.localStorage.getItem(key);
      if (jsonValue !== null) return JSON.parse(jsonValue);

      return defaultValue;
    });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, 
    // eslint-disable-next-line
    [value, setValue]);

    return [value, setValue];
  }

  export default useLocalStorage;
import { useState, useEffect } from 'react';

const UseStateService = (defaultValue: any, key: string) => {
  const [value, setValue] = useState(() => {
    let stickyValue: any = window.localStorage.getItem(key);
    return stickyValue !== null || stickyValue !== '' ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default UseStateService;

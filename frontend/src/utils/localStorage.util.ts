/*
  I think this .ts file work in vite.js if not 
  just remove all the typings an it will work as well.
*/
export const getLocalStorage = (key: string) => {
  const getLocalData = localStorage.getItem(key);
  return getLocalData !== null ? JSON.parse(getLocalData) : [];
};

export const setLocalStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

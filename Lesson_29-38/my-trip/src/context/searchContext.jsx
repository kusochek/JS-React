import { createContext, useMemo, useState } from 'react';

const initialState = {
  searchValue: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearchValue: () => {},
};

const GlobalSearchContext = createContext(initialState);

export function GlobalSearchContextProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');

  const contextValue = useMemo(() => ({
    searchValue,
    setSearchValue,
  }), [searchValue]);

  return (
    <GlobalSearchContext.Provider value={contextValue}>
      {children}
    </GlobalSearchContext.Provider>
  );
}

export default GlobalSearchContext;

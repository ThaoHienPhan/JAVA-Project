import React, { createContext, useReducer, useState } from 'react';
import { ProjectContext } from './ProjectContext';

export const GlobalContextProvider = createContext(ProjectContext);
export const GlobalStoreContext = ({ children }) => {
  const [language, setLanguage] = useState('VI');
  const valueContext = {
    language,
    setLanguage,
  };
  return (
    <GlobalContextProvider.Provider value={valueContext}>
      {children}
    </GlobalContextProvider.Provider>
  );
};

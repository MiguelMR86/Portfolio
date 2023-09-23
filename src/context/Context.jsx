import React, { useState, createContext } from "react";

export const Context = createContext();

export function ContextProvider({ children, value: {...other} }) {
  // States
  const [openMenu, setOpenMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  // Handlers
  const handleOpenMenu = () => setOpenMenu(!openMenu);

  const operators = {
    openMenu, handleOpenMenu,
    currentSection, setCurrentSection
  };

  return (
    <Context.Provider value={{...operators, ...other}}>
      {children}
    </Context.Provider>
  );
}

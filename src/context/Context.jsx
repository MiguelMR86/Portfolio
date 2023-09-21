import React, { useState, createContext } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [state, setState] = useState({});

  const functions = {
    state, setState,
  };

  return (
    <Context.Provider value={functions}>
        {children}
    </Context.Provider>
  );
}

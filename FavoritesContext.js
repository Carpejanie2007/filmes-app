import React, { createContext, useReducer } from 'react';

export const FavoritesContext = createContext();

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.movie];
    case 'REMOVE':
      return state.filter(m => m.id !== action.id);
    default:
      return state;
  }
}

export function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FavoritesContext.Provider value={{ favorites: state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

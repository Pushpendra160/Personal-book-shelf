import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
 
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    
  }, [state]);

  // actions
  const addBookToShelf = (movie) => {
    dispatch({ type: "ADD_BOOK_TO_BOOKSHELF", payload: movie });
  };

  const removeBookFromBookShelf = (author_key) => {
    dispatch({ type: "REMOVE_BOOK_FROM_BOOKSHELF", payload: author_key });
  };

 

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
     
        addBookToShelf,
        removeBookFromBookShelf,
       
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

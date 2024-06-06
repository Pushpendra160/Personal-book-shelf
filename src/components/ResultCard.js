import React, { useContext, useState } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";
import Book from "../book.jpg"

export const ResultCard = ({ book }) => {
  const {
    addBookToShelf,
   
  } = useContext(GlobalContext);

  // let storedbook = watchlist.find((o) => o.id === book.author_key);
  // let storedbookWatched = watched.find((o) => o.id === book.author_key);
  
  const [click, setClick] = useState(false);

  // const watchlistDisabled = storedbook
  //   ? true
  //   : storedbookWatched
  //   ? true
  //   : false;

  // const watchedDisabled = storedbookWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
       <img src={Book} alt="book" />
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{book.title}</h3>
          <h4 className="release-date">
            {book.author_name[0]}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
           disabled={click}
            onClick={() => {
              console.log(book.author_key);
              addBookToShelf(book);
              setClick(!click);


            }}
          >
            Add to BookShelf
          </button>

       
        </div>
      </div>
    </div>
  );
};

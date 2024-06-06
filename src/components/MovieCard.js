import React, { useContext } from "react";
import { MovieControls } from "./MovieControls";
import { GlobalContext } from "../context/GlobalState";
import Book from "../book.jpg"
import './moviecard.css'

export const MovieCard = ({ movie }) => {
  const {
    removeBookFromBookShelf,
 
  } = useContext(GlobalContext);
  
  return (
    // <div className="movie-card">
    //   <div className="overlay"></div>

    //   <img
    //     src={Book}
    //     alt={`${movie.title} Poster`}
    //   />

    //   <MovieControls type={type} movie={movie} />
    // </div>

<div className="movie-card">
  <img src={Book} alt="book" />
  <div className="card-info"> 
  <h3>{movie.title}</h3>
  <button className="btn"
    onClick={() => removeBookFromBookShelf(movie.author_key)}
  >Remove from bookshelf</button>
  </div>

</div>



  );




};

export default (state, action) => {
  switch (action.type) {
    case "ADD_BOOK_TO_BOOKSHELF":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_BOOK_FROM_BOOKSHELF":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.author_key !== action.payload
        ),
      };
   
   
    default:
      return state;
  }
};

import React from "react";
import { Link } from "react-router-dom";
import Logo from '../logo.png'
export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <img src={Logo} alt="logo"  style={{width:"30px"}}/>
            <Link to="/">Personal Bookshelf</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/bookshelf">Book Shelf</Link>
            </li>

           

            <li>
              <Link to="/" className="btn btn-main">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

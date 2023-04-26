// import React from "react";

// export const Regex = () => {
//   const regex = /a/;
//   const stringToTest = "This is a test a strinag";
//   console.log(stringToTest.search(regex)); // true
// };

import React, { useState, useEffect } from "react";
import HomeCss from "../styling/homepage.module.css";
import SearchImage from "../images/cont1.jpg";
import Discover from "../images/discover.png";
import Movies from "../images/movies.png";
import Tvshows from "../images/tvshows.png";
import MovieCss from "../styling/moviepage.module.css";
import ErrorCss from "../styling/error.module.css";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className={HomeCss.container}>
      <div className={HomeCss.searchBar}>
        <ul style={{ textDecoration: "none" }}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <li>Home</li>
          </Link>

          <Link style={{ textDecoration: "none", color: "black" }} to="/movies">
            <li
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
              style={{
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Movies
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/tvshows"
          >
            <li style={{ cursor: "pointer" }}>Tv Shows</li>
          </Link>
        </ul>

        <input
          className={HomeCss.inputSearch}
          placeholder="search"
          type="search"
          src={SearchImage}
        ></input>
      </div>
      <div className={ErrorCss.navHead}>
        {" "}
        404 - Not Found
        <p style={{ fontSize: "0.3em" }}> Sorry , please try again later. </p>
      </div>

      <div className={HomeCss.navBarBtm}>
        <figure>
          <Link to="/">
            <img className={HomeCss.discover} src={Discover} />
          </Link>
          <figcaption className={HomeCss.discoverText}>Discover</figcaption>
        </figure>

        <figure>
          <img className={HomeCss.movies} src={Movies} />
          <figcaption
            style={{ color: "#d16014", fontWeight: "bold" }}
            className={HomeCss.moviesText}
          >
            Movies
          </figcaption>
        </figure>

        <figure>
          <Link to="/tvshows">
            <img className={HomeCss.tvshows} src={Tvshows} />
          </Link>
          <figcaption className={HomeCss.tvshowsText}>Tv Shows</figcaption>
        </figure>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import HomeCss from "../styling/homepage.module.css";
import SearchImage from "../images/cont1.jpg";
import Discover from "../images/discover.png";
import Movies from "../images/movies.png";
import Tvshows from "../images/tvshows.png";
import Account from "../images/account.png";
import MovieCss from "../styling/moviepage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Moviepage() {
  const [group1, setGroup1] = useState([]);
  const [group2, setGroup2] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .all([
        axios.get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1"
        ),
        axios.get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1"
        ),
      ])
      .then(
        axios.spread((api1Response, api2Response) => {
          setGroup1(api1Response.data.results);
          setGroup2(api2Response.data.results);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(search);

  console.log(group1, group2);

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
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className={MovieCss.navHead}> Movies In theater </div>

      <div className={MovieCss.movieContainer}>
        {group1
          .filter((data) => {
            return search.toLocaleLowerCase() === ""
              ? data
              : data.title.toLocaleLowerCase().includes(search);
            // ? <div> This page does </div>:
          })
          .map((data, index) => (
            <div
              className={MovieCss.movieItems}
              key={index}
              style={{
                backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face/${data["poster_path"]})`,
              }}
            >
              <div className={MovieCss.movieName}> {data.title} </div>
            </div>
          ))}
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
}

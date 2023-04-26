import React, { useEffect, useState } from "react";
import MovieCss from "../styling/moviepage.module.css";
import HomeCss from "../styling/homepage.module.css";
import SearchImage from "../images/cont1.jpg";
import Discover from "../images/discover.png";
import Movies from "../images/movies.png";
import Tvshows from "../images/tvshows.png";
import axios from "axios";
import _ from "lodash";
import { Link } from "react-router-dom";

export const TvShows = () => {
  const [updated, setUpdated] = useState([]);

  const [temp, setTemp] = useState([{}]);

  const [val, setVal] = useState([]);

  const options = {
    method: "GET",
    url: "https://netflix54.p.rapidapi.com/search/",
    params: {
      query: "stranger",
      offset: "0",
      limit_titles: "50",
      limit_suggestions: "20",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "c4567f7f2amsh6502f1468677466p10bff5jsn035f8a4d6094",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.titles);

        setUpdated(response.data.titles);
        // console.log(response.data.titles[0]);
        // setUpdated(response.data.results);
        // setTemp(response.data.titles);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  //   const { jawSummary } = temp[0];
  //   console.log(jawSummary);
  //   const { title } = jawSummary;
  // console.log(title);

  const array = [];
  const urlArray = [];
  const newArray = [];
  const [search, setSearch] = useState("");

  // console.log(name);

  for (var i = 0; i < updated.length; i++) {
    const {
      jawSummary: { title },
    } = updated[i];

    array.push(title);
  }

  for (var x = 0; x < updated.length; x++) {
    const {
      jawSummary: {
        backgroundImage: { url },
      },
    } = updated[x];

    urlArray.push(url);
  }

  for (var x = 0; x < updated.length; x++) {
    const {
      jawSummary: {
        genres: [...name],
      },
    } = updated[x];

    newArray.push(name);
  }

  // const AnewArray = [];
  // for (var x = 0; x < newArray.length; x++) {
  //   const { name } = newArray[x];

  //   AnewArray.push(name);
  // }

  console.log(newArray);
  // console.log(AnewArray);

  // for (var a = 0; a < updated.length; a++) {
  //   const {
  //     jawSummary: {
  //       genre: [, , { id, name }],
  //     },
  //   } = updated[a];
  //   newArray.push(name);

  //   // for (var i = 1; i < genre.length; i++) {
  //   //   genre = genre[i - 1] + genre[i];
  //   //   newArray.push(genre);
  //   // }
  // }

  // console.log(`This is new array ${newArray}`);

  // // const {
  // //   jawSummary: {
  // //     genre: { name },
  // //   },
  // // } = updated[1];

  // console.log(updated);

  // console.log(array);

  // console.log(urlArray);

  const combinearray = _.zip(array, urlArray, newArray);

  console.log(`This is ${temp}`);

  // console.log(`The genre of index 0 is ${name}`);

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
      <div className={MovieCss.navHead}> Tv Shows In theater </div>

      <div className={MovieCss.movieContainer}>
        {combinearray
          .filter(([name, image]) => {
            return search.toLowerCase() === ""
              ? [name, image]
              : name.toLowerCase().includes(search);
          })
          .map(([name, image]) => (
            <div
              className={MovieCss.movieItems}
              key={name}
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "-8em",
              }}
            >
              <div
                className={MovieCss.movieName}
                style={{ fontSize: "0.8em", width: "40vw" }}
              >
                {name}
              </div>
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
          <Link to="/movies">
            <img className={HomeCss.movies} src={Movies} />
          </Link>
          <figcaption className={HomeCss.moviesText}>Movies</figcaption>
        </figure>

        <figure>
          <img className={HomeCss.tvshows} src={Tvshows} />
          <figcaption
            style={{ color: "#d16014", fontWeight: "bold" }}
            className={HomeCss.tvshowsText}
          >
            Tv Shows
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

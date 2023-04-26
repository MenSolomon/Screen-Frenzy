import React, { useState, useEffect } from "react";
import HomeCss from "../styling/homepage.module.css";
import SearchImage from "../images/cont1.jpg";
import Discover from "../images/discover.png";
import Movies from "../images/movies.png";
import Tvshows from "../images/tvshows.png";
import Account from "../images/account.png";
import SimpleSlider from "./simpleslider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Badge from "../images/check.png";
import TheaterSlider from "./theaterslider";
import { Link } from "react-router-dom";
import MovieCss from "../styling/moviepage.module.css";
import HeadLogo from "../images/mediahub.png";

export const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [images, setImages] = useState([]);

  const [updated2, setUpdated2] = useState([]);

  const [hover, setHover] = useState(false);

  const style = {
    visibility: hover ? "visible" : "hidden",
  };

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
          setImages(api1Response.data.results);
          setUpdated2(api2Response.data.results);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [group1, setGroup1] = useState([]);
  const [group2, setGroup2] = useState([]);

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

  const limitedItems = group1.slice(0, 3);

  return (
    <div className={HomeCss.container}>
      <div className={HomeCss.searchBar}>
        <ul style={{ textDecoration: "none" }}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <li>Home</li>
          </Link>

          <Link style={{ textDecoration: "none", color: "black" }} to="/movies">
            <li
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
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
      <div style={style} className={HomeCss.moviesMenu}>
        <div>Click to view all the movies in this theater </div>
        <p>
          <h4> CERTIFIED FRESH PICKS </h4>
        </p>

        <div style={{ display: "flex", marginLeft: "48vw" }}>
          {limitedItems.map((data, index) => (
            <div
              className={MovieCss.movieItemsFres}
              key={index}
              style={{
                backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face/${data["poster_path"]})`,
                width: "15vw",
                height: "45vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginRight: "2vw",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <div
                className={MovieCss.movieNameFresh}
                style={{ marginTop: "45vh" }}
              >
                {" "}
                {data.title}{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={HomeCss.headSlider}>
        <Carousel
          responsive={responsive}
          showDots={true}
          renderDotsOutside={true}
          autoPlay={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          rewind={true}
          customTransition="transform 1200ms ease-in-out"
          autoPlaySpeed={6000}
        >
          {images.map((data, index) => (
            <div
              key={index}
              className={HomeCss.card1}
              style={{
                backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${data["poster_path"]})`,
              }}
            >
              <div className={HomeCss.movieInfo}>
                <span id={HomeCss.heading}> {data.title} </span>

                <p>{data.overview}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className={HomeCss.allMovies}>
        <SimpleSlider />
      </div>

      <div className={HomeCss.popularStream}>
        <h6> POPULAR STREAMING MOVIES </h6>

        {updated2.map((data, index) => (
          <p className={HomeCss.movieRating} key={index} {...data}>
            {data.title} :
            <span className={HomeCss.ratingPercentage}>
              <img src={Badge} alt="badge" /> {data["vote_average"] * 10}%
            </span>
          </p>
        ))}
      </div>

      <div className={HomeCss.popularTheater}>
        <h6> POPULAR IN THEATRES</h6>
        <TheaterSlider />
      </div>

      <div className={HomeCss.navBarBtm}>
        <figure>
          <Link to="/">
            <img className={HomeCss.discover} src={Discover} />
          </Link>
          <figcaption
            style={{ color: "#d16014", fontWeight: "bold" }}
            className={HomeCss.discoverText}
          >
            Discover
          </figcaption>
        </figure>

        <figure>
          <Link to="/movies">
            <img className={HomeCss.movies} src={Movies} />
          </Link>
          <figcaption className={HomeCss.moviesText}>Movies</figcaption>
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

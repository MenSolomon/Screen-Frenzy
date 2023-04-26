import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";
import SlideCss from "../styling/simpleslider.module.css";
import axios from "axios";

export default function TheaterSlider() {
  const [updated, setUpdated] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=15e383204c1b8a09dbfaaa4c01ed7e17"
      )
      .then((response) => {
        setUpdated(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1100 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5,
    },
  };

  return (
    <div className={SlideCss.card}>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {updated.map((data, index) => (
          <div>
            <div
              className={SlideCss.card1}
              key={index}
              {...data}
              style={{
                backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face/${data["poster_path"]})`,
              }}
            ></div>
            <div className={SlideCss.movieName}>
              {data.title} {data.name}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

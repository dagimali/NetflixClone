/** @format */

import React, { useEffect, useState } from "react";
import axios from "../../API-Data/axios";
import requests from "../../API-Data/requests";
// import playIcon from "../../common/images/icons/play-icon.png";
import "./Banner.css";
// console.log(playIcon);
// import Link from "react";
let imgURL = "https://image.tmdb.org/t/p/w500";
const Banner = () => {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchBanner() {
      const bannerMovie = await axios.get(requests.fetchNetflixOriginal);
      setmovie(
        bannerMovie?.data.results[
          Math.floor(Math.random() * bannerMovie.data.results.length)
        ]
      );
      return bannerMovie;
    }
    fetchBanner();
  }, []);
  // console.log(movie);
  function trimDescription(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner-img"
      style={{
        backgroundImage: `url(${imgURL}${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // minHeight: "100%",
        Width: "100%",
        height: "650px",
        backgroundPosition: "center",
      }}
    >
      <div className="movie-wrapper">
        <div>
          <h1 className="movieName">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
        </div>
        <div className="movie_description">
          <p>{trimDescription(movie?.overview, 150)}</p>
        </div>
        <div className="button-wrapper">
          <button className="buttonStyle play">
            <i className="fa fa-play" aria-hidden="true"></i> Play
          </button>
          <button className="buttonStyle info">
            {" "}
            <i className="fa fa-info-circle" aria-hidden="true"></i> More Info
          </button>
        </div>
        <div className="fadeBg"></div>
      </div>
    </div>
  );
};

export default Banner;

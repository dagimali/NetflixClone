/** @format */

import React from "react";
import "./Row.css";
import { useState, useEffect } from "react";
import axios from "../../API-Data/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// import { Link } from "react";
let imgURL = "https://image.tmdb.org/t/p/w500";
function Row({ title, fetchUrl, islarge_row }) {
  const [Movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        console.log(response.data.results);
        setMovies(response.data.results);
        return fetchData;
      } catch (err) {
        if (err) {
          console.log(err.response.data);
          console.log(err.message);
        }
      }
    };
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390px",
    width: "100%",
    type: "video/mp4",
    frameborder: "0",
    playerVars: {
      autoPlay: true,
    },
  };
  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(item?.name || item?.title || item?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
      // console.log(Movie.name);
    }
  };

  // console.log(trailerUrl);
  return (
    <div className="genre">
      <h1> {title}</h1>
      <div className="movies-wrapper">
        {Movies.map(
          (item) =>
            ((islarge_row && item.poster_path) ||
              (!islarge_row && item.backdrop_path)) && (
              <img
                key={item.id}
                onClick={() => handleClick(item)}
                className={`VideoThumbnail ${
                  islarge_row && "thumbnail_large"
                } `}
                src={`${imgURL}${
                  islarge_row ? item.poster_path : item.backdrop_path
                }`}
                alt={item.name}
              />
            )
        )}
        {/* {Movies?.map((item) => {
         
          let movieName = item.name;
          // console.log(movieName);
          let VideoWrapper = (
            <div>
              <div
                key={id}
                className={`VideoThumbnail ${
                  islarge_row && "thumbnail_large"
                } `}
              >
                <img
                  onClick={() => handleClick(item)}
                  src={`${imgURL}${
                    islarge_row
                      ? item.poster_path
                      : item.backdrop_path || item.poster_path
                  }`}
                  // src= {`${imgURL}${
                  //   islarge_row ? item?.poster_path : item?.backdrop_path
                  // }`}
                  alt={movieName}
                />
              </div>
            </div>
          );
          return VideoWrapper;
        })} */}
      </div>
      <div key={trailerUrl}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;

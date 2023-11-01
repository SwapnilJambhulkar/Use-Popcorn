import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Rating from "./Rating";

import { detailsProps, queryDetails } from "./types";

const MovieDetails: React.FC<detailsProps> = ({
  selectedId,
  hanldeSelection,
  handleSavingMovies,
  savedMovies,
}) => {
  const [data, setData] = useState<queryDetails | Record<string, never>>({});

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    hanldeSelection("");
    setData({});
  };

  useEffect(() => {
    const getDetails = async () => {
      setIsLoading(true);
      const url = `https://www.omdbapi.com/?apikey=d061bd37&i=${selectedId}`;

      const res = await fetch(url);

      const data = await res.json();

      setData(data);

      setIsLoading(false);
    };
    if (selectedId) {
      getDetails();
    }
  }, [selectedId]);

  return (
    <div className={`details ${selectedId ? "show" : "hide"}`}>
      {isLoading ? (
        <h2 className="loading">LOADING...</h2>
      ) : (
        <>
          <div className="img-overview">
            <div>
              <img src={data?.Poster} alt="" />
              <FontAwesomeIcon
                onClick={() => handleClick()}
                className="arrow-left"
                icon={faArrowCircleLeft}
              />
            </div>
            <div className="title">
              <h2>{data?.Title}</h2>
              <p>
                {data?.Released} • {data?.Runtime}
              </p>
              <p>{data?.Genre}</p>
              <p>⭐{data?.imdbRating} IMDb rating</p>
            </div>
          </div>
          <Rating
            data={data}
            handleSavingMovies={handleSavingMovies}
            savedMovies={savedMovies}
          />
          <div className="info">
            <p>{data?.Plot}</p>
            <p>{data?.Actors}</p>
            <p>Directed by {data?.Director}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
